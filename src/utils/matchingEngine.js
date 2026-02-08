export const calculateMatchScore = (profile, opportunity) => {
    let score = 0;
    let maxScore = 0;
    let reasons = [];

    const weights = {
        software: 0.25,
        interests: 0.25,
        preferences: 0.30, // Higher weight for 'Ser'
        skills: 0.20
    };

    // 1. Preferencias (El Ser / Purpose) - 30%
    if (profile.preferences) {
        let prefScore = 0;
        let prefMax = 100; // Base

        // SECTOR MATCH
        if (profile.preferences.sector && profile.preferences.sector.length > 0) {
            const opportunityTags = [opportunity.type, ...(opportunity.tags || [])].map(t => t.toLowerCase());
            const sectorMatch = profile.preferences.sector.some(sec =>
                opportunityTags.some(tag => tag.includes(sec)) ||
                (sec === 'public' && (opportunityTags.includes('policy') || opportunityTags.includes('government'))) ||
                (sec === 'startup' && (opportunityTags.includes('tech') || opportunityTags.includes('innovation'))) ||
                (sec === 'academia' && (opportunityTags.includes('research') || opportunityTags.includes('phd')))
            );

            if (sectorMatch) {
                prefScore += 50;
                reasons.push("Coincide con tu entorno preferido (" + profile.preferences.sector.join('/') + ")");
            }
        } else {
            prefScore += 25; // Neutral
        }

        // SALARY vs IMPACT
        // Heuristic: If salary preference is high (>70), prioritize Corporate/High Salary locs
        // If low (<30), prioritize NGO/Research/Policy
        if (profile.preferences.salary > 70) {
            if (opportunity.tags?.includes('Finance') || opportunity.tags?.includes('Corporate') || (opportunity.salary && opportunity.salary.includes('15M'))) {
                prefScore += 50;
                reasons.push("Alineado a tu expectativa salarial alta");
            }
        } else if (profile.preferences.salary < 30) {
            if (opportunity.type === 'Policy/Research' || opportunity.tags?.includes('NGO') || opportunity.tags?.includes('Social')) {
                prefScore += 50;
                reasons.push("Alineado a tu propósito de impacto social");
            }
        } else {
            prefScore += 30; // Balance
        }

        score += (prefScore / prefMax) * weights.preferences * 100;
        maxScore += weights.preferences * 100;
    }

    // 2. Software (El Hacer) - 25%
    if (opportunity.requirements?.software) {
        let softScore = 0;
        let softMax = 0;

        Object.entries(opportunity.requirements.software).forEach(([tool, minLevel]) => {
            softMax += 3;
            const userLevel = profile.software[tool]?.level || 0;
            if (userLevel >= minLevel) {
                softScore += 3;
                if (!reasons.includes(`Tu nivel de ${tool} es ideal`)) reasons.push(`Tu nivel de ${tool} es ideal`);
            } else {
                softScore += userLevel;
            }
        });

        if (softMax > 0) {
            score += (softScore / softMax) * weights.software * 100;
            maxScore += weights.software * 100;
        }
    }

    // 3. Interests (El Saber/Querer) - 25%
    if (opportunity.tags || opportunity.type) {
        let intScore = 0;
        // Check for matches
        if (profile.interests.research && (opportunity.tags?.includes('Research') || opportunity.type === 'Research')) {
            intScore += 1;
            reasons.push("Fuerte componente de investigación");
        }
        if (profile.interests.tech && (opportunity.tags?.includes('Tech') || opportunity.type.includes('Tech'))) {
            intScore += 1;
            reasons.push("Enfoque tecnológico que buscas");
        }
        if (profile.interests.publicPolicy && (opportunity.tags?.includes('Policy') || opportunity.type.includes('Policy'))) {
            intScore += 1;
            reasons.push("Impacto en política pública");
        }

        if (intScore > 0) score += weights.interests * 100;
        else score += 20; // Base overlap
        maxScore += weights.interests * 100;
    }

    const finalScore = Math.min(100, Math.round(score));
    // Limit reasons to top 2 distinctive ones
    const explanation = reasons.slice(0, 2).join(". ") + ".";

    return { score: finalScore, explanation };
};

export const filterOpportunities = (profile, opportunities) => {
    // Helper to process a list
    const processList = (list) => {
        if (!list) return [];
        return list.map(op => {
            const { score, explanation } = calculateMatchScore(profile, op);
            return { ...op, score, explanation };
        }).sort((a, b) => b.score - a.score);
    };

    return {
        maestrias: processList(opportunities.maestrias),
        becas: processList(opportunities.becas),
        empleos: processList(opportunities.empleos_simulados),
        cursos: processList(opportunities.cursos).map(c => ({ ...c, score: 95, explanation: "Curso fundamental para tu perfil." })) // Simplify courses
    };
};
