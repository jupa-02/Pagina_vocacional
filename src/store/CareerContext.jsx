import { createContext, useContext, useState } from 'react';

const CareerContext = createContext();

export function CareerProvider({ children }) {
    const [profile, setProfile] = useState({
        name: '',
        software: {
            r: { level: 0, libraries: [] }, // 0: None, 1: Basic, 2: Intermediate, 3: Advanced
            python: { level: 0, libraries: [] },
            stata: { level: 0 },
            excel: { level: 0 },
        },
        skills: {
            causalInference: 0, // 0-3 scale
            machineLearning: 0,
            writing: 0,
            english: 0,
        },
        interests: {
            publicPolicy: false,
            finance: false,
            tech: false,
            research: false,
            international: false,
        },
        preferences: {
            salary: 50, // 0-100 slider (Impact vs Money)
            workLifeBalance: 50, // 0-100 (Grind vs Balance)
            remote: 'hybrid', // remote, hybrid, onsite
            sector: [], // startup, corporate, public, academia
        }
    });

    const [recommendedPath, setRecommendedPath] = useState(null);

    const updateProfile = (section, key, value) => {
        setProfile(prev => {
            // Deep merge logic if needed, but for now simple 2-level
            // If value is an object (like {level: 3}), merge it
            const currentSection = prev[section] || {};
            const currentValue = currentSection[key];

            let newValue = value;
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                newValue = { ...currentValue, ...value };
            }

            return {
                ...prev,
                [section]: {
                    ...prev[section],
                    [key]: newValue
                }
            };
        });
    };
    const calculatePath = () => {
        // Logic to determine path based on granular profile
        let scores = {
            techEconomist: 0,
            policyWonk: 0,
            corporative: 0,
            researcher: 0,
        };

        // Tech Economist: Python/R + ML
        if (profile.software.python.level >= 2) scores.techEconomist += 3;
        if (profile.software.r.level >= 2) scores.techEconomist += 2;
        if (profile.skills.machineLearning >= 2) scores.techEconomist += 3;
        if (profile.interests.tech) scores.techEconomist += 2;

        // Policy Wonk: Stata/R + Public Policy + Writing
        if (profile.interests.publicPolicy) scores.policyWonk += 3;
        if (profile.software.stata.level >= 2) scores.policyWonk += 2;
        if (profile.software.r.level >= 1) scores.policyWonk += 1; // R is growing in policy
        if (profile.skills.writing >= 2) scores.policyWonk += 2;
        if (profile.interests.international) scores.policyWonk += 1;

        // Corporate: Excel + Finance
        if (profile.interests.finance) scores.corporative += 3;
        if (profile.software.excel.level >= 3) scores.corporative += 2; // Advanced Excel is key
        if (profile.skills.english >= 2) scores.corporative += 1;

        // Researcher: Research interest + Theory + Math (implied by high stats skills)
        if (profile.interests.research) scores.researcher += 4; // High weight on interest
        if (profile.skills.writing >= 2) scores.policyWonk += 1; // Also good for research
        if (profile.software.stata.level >= 2 || profile.software.r.level >= 2) scores.researcher += 1;

        // Find max score
        const maxScore = Math.max(...Object.values(scores));
        const bestFit = Object.keys(scores).find(key => scores[key] === maxScore);

        setRecommendedPath(bestFit);
    };

    return (
        <CareerContext.Provider value={{ profile, updateProfile, recommendedPath, calculatePath }}>
            {children}
        </CareerContext.Provider>
    );
}

export function useCareer() {
    return useContext(CareerContext);
}
