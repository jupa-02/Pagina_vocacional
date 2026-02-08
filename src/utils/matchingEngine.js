export const calculateMatchScore = (profile, opportunity) => {
    let score = 0;
    let maxScore = 0;
    const weights = {
        software: 0.3,
        skills: 0.2,
        interests: 0.3,
        preferences: 0.2
    };

    // 1. Software Match (30%)
    if (opportunity.requirements?.software) {
        let softwareScore = 0;
        let softwareMax = 0;

        Object.entries(opportunity.requirements.software).forEach(([tool, minLevel]) => {
            const userLevel = profile.software[tool]?.level || 0;
            const weight = 1; // Can be adjustable
            softwareMax += weight * 3; // Max level is 3

            // Penalize if below requirement, reward if meets/exceeds
            if (userLevel >= minLevel) {
                softwareScore += weight * 3; // Full match
            } else {
                softwareScore += weight * userLevel; // Partial credit
            }
        });

        if (softwareMax > 0) {
            score += (softwareScore / softwareMax) * weights.software * 100;
            maxScore += weights.software * 100;
        }
    }

    // 2. Skills Match (20%)
    if (opportunity.requirements?.skills) {
        // Similar logic for skills...
        let skillsScore = 0;
        let skillsMax = 0;

        Object.entries(opportunity.requirements.skills).forEach(([skill, minLevel]) => {
            const userLevel = profile.skills[skill] || 0;
            skillsMax += 3;
            if (userLevel >= minLevel) skillsScore += 3;
            else skillsScore += userLevel;
        });

        if (skillsMax > 0) {
            score += (skillsScore / skillsMax) * weights.skills * 100;
            maxScore += weights.skills * 100;
        }
    }

    // 3. Interests Match (30%)
    // Check if opportunity "tags" or "type" matches user interests
    if (opportunity.type || opportunity.tags) {
        let interestScore = 0;
        // Simple heuristic: if profile interest is true, and opportunity tags match related keywords

        if (profile.interests.publicPolicy && (opportunity.type === 'Policy' || opportunity.tags?.includes('Policy'))) interestScore += 1;
        if (profile.interests.tech && (opportunity.type === 'Tech-Economist' || opportunity.tags?.includes('Tech'))) interestScore += 1;
        if (profile.interests.research && (opportunity.type === 'Research' || opportunity.tags?.includes('Research'))) interestScore += 1;
        if (profile.interests.finance && (opportunity.type === 'Corporate' || opportunity.tags?.includes('Finance'))) interestScore += 1;

        // Normalize: if at least one match found, give full points for this section (simplified)
        if (interestScore > 0) score += weights.interests * 100;
        maxScore += weights.interests * 100; // Always count this bucket
    }

    // 4. Preferences (20%)
    // Salary vs Impact, Remote, etc.
    let prefScore = 0;

    // Salary check (heuristic)
    if (opportunity.salary) {
        // Parse salary from string like "$12M - $18M COP" -> avg 15
        const salaryText = opportunity.salary;
        // This is complex to parse strictly without cleaner data, implementing a placeholder logic
        // If user wants high salary (>70) and job matches high salary keywords or is Corporate/Tech
        if (profile.preferences.salary > 70) {
            if (opportunity.tags?.includes('Tech') || opportunity.tags?.includes('Finance') || opportunity.salary.includes('15M') || opportunity.salary.includes('18M')) {
                prefScore += 50;
            }
        } else {
            prefScore += 50; // Neutral or low salary preference is easier to satisfy
        }
    } else {
        prefScore += 50; // No salary info, give benefit of doubt
    }

    // Remote check
    if (opportunity.location) {
        const isRemoteJob = opportunity.location.toLowerCase().includes('remoto');
        const userWantsRemote = profile.preferences.remote === 'remote';

        if (userWantsRemote && isRemoteJob) prefScore += 50;
        else if (!userWantsRemote) prefScore += 50; // Flexible
        else if (userWantsRemote && !isRemoteJob) prefScore += 0;
    }

    score += (prefScore / 100) * weights.preferences * 100;
    maxScore += weights.preferences * 100;

    return Math.min(100, Math.round(score));
};

export const filterOpportunities = (profile, opportunities) => {
    // 1. Calculate scores
    const scoredMaps = {
        maestrias: opportunities.maestrias.map(op => ({ ...op, score: calculateMatchScore(profile, op) })),
        becas: opportunities.becas.map(op => ({ ...op, score: calculateMatchScore(profile, op) })), // Becas less strict
        empleos: opportunities.empleos_simulados.map(op => ({ ...op, score: calculateMatchScore(profile, op) })),
        cursos: opportunities.cursos.map(op => ({ ...op, score: 95 })), // Courses are usually good for everyone, simplified
    };

    // 2. Filter by threshold (e.g., > 60%) or Top N
    // For now, return all sorted by score
    return {
        maestrias: scoredMaps.maestrias.sort((a, b) => b.score - a.score),
        becas: scoredMaps.becas,
        empleos: scoredMaps.empleos.sort((a, b) => b.score - a.score),
        cursos: scoredMaps.cursos
    };
};
