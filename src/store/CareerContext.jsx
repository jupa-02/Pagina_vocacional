import { createContext, useContext, useState } from 'react';

const CareerContext = createContext();

export function CareerProvider({ children }) {
    const [scores, setScores] = useState({
        // RIASEC
        realistic: 0,
        investigative: 0,
        artistic: 0,
        social: 0,
        enterprising: 0,
        conventional: 0,
        // Ikigai Skills
        analytical: 0,
        creative: 0,
        management: 0,
        // Values
        social_impact: 0,
        wealth: 0,
        innovation: 0,
        stability: 0,
        corporate: 0,
        academic: 0,
        field: 0,
        remote: 0,
        risk_taker: 0,
        passion: 0,
        freelance: 0,
        solo: 0,
        team_small: 0,
        team_lead: 0,
        networker: 0
    });

    const [recommendedPath, setRecommendedPath] = useState(null);

    const updateScore = (dimension, weight) => {
        setScores(prev => ({
            ...prev,
            [dimension]: (prev[dimension] || 0) + weight
        }));
    };

    const calculatePath = () => {
        // Define archetypes and their required score mix
        const archetypes = {
            techEconomist: {
                investigative: 3,
                analytical: 5,
                innovation: 2,
                tech: 3 // implied
            },
            businessEconomist: {
                enterprising: 4,
                conventional: 2,
                management: 3,
                corporate: 2,
                wealth: 2
            },
            policyWonk: {
                social: 3,
                investigative: 3,
                social_impact: 4,
                writing: 2 // implied
            },
            researcher: {
                investigative: 5,
                academic: 4,
                analytical: 3,
                solo: 2
            },
            corporative: {
                conventional: 4,
                enterprising: 2,
                stability: 3,
                corporate: 4
            }
        };

        // Score each archetype against the user's scores
        let bestFit = 'businessEconomist'; // Default fallback
        let maxMatchScore = -1;

        Object.entries(archetypes).forEach(([key, requirements]) => {
            let matchScore = 0;
            Object.entries(requirements).forEach(([dim, weight]) => {
                // Add the user's score for this dimension * the weight importance
                matchScore += (scores[dim] || 0) * weight;
            });

            if (matchScore > maxMatchScore) {
                maxMatchScore = matchScore;
                bestFit = key;
            }
        });

        setRecommendedPath(bestFit);
    };

    return (
        <CareerContext.Provider value={{ scores, updateScore, recommendedPath, calculatePath }}>
            {children}
        </CareerContext.Provider>
    );
}

export function useCareer() {
    return useContext(CareerContext);
}
