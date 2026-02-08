// Base de datos ACTUALIZADA con oportunidades reales para 2025-2026
// Datos curados por agentes el 2026-02-08

export const opportunities = {
    maestrias: [
        {
            id: 1,
            university: "University of Padua (Italy)",
            program: "Erasmus Mundus: Data Engineering and Artificial Intelligence (DEAI)",
            country: "Italy / France",
            type: "Tech-Economist",
            description: "Especilizaci\u00f3n en 'Business, Economics, and Financial Data Science'. Becas Erasmus Mundus disponibles (cobertura total).",
            link: "https://www.unipd.it/en/erasmus-mundus-deai",
            tags: ["Full Funding", "AI & Econ", "Erasmus"]
        },
        {
            id: 2,
            university: "Fordham University (USA)",
            program: "M.S. in Data Science and Quantitative Economics",
            country: "USA",
            type: "Tech-Economist",
            description: "Programa STEM fusionando teor\u00eda econ\u00f3mica con data science. Elegible para becas de m\u00e9rito. Deadline: Jan 2026.",
            link: "https://www.fordham.edu/academics/departments/data-science/graduate-programs/ms-in-data-science-and-quantitative-economics/",
            tags: ["STEM", "Quant", "Merit Aid"]
        },
        {
            id: 3,
            university: "London School of Economics (LSE)",
            program: "MSc Social Data Science",
            country: "UK",
            type: "Policy/Research",
            description: "La intersecci\u00f3n perfecta entre ciencias sociales computacionales y econom\u00eda.",
            link: "https://www.lse.ac.uk/study-at-lse/Graduate/degree-programmes-2024/MSc-Applied-Social-Data-Science",
            tags: ["Top Tier", "Social Data", "UK"]
        },
        {
            id: 4,
            university: "Universidad de los Andes",
            program: "Maestr\u00eda en Econom\u00eda (PEG)",
            country: "Colombia",
            type: "Research",
            description: "Lider nacional. Ideal como paso a PhD o sector p\u00fablico de alto nivel. Posibilidades de Asistencia Graduada.",
            link: "https://economia.uniandes.edu.co/maestria-economia",
            tags: ["Regional Leader", "Research"]
        }
    ],
    becas: [
        {
            id: 1,
            name: "Cr\u00e9dito-Beca COLFUTURO",
            entity: "Colfuturo",
            description: "Hasta USD 50.000. Condonable hasta el 80% si regresas a regiones o trabajas con el Estado. Convocatoria abre Enero/Febrero.",
            deadline: "28 Feb 2025 (Estimado)",
            link: "https://www.colfuturo.org/",
            tags: ["Colombia", "Top Funding"]
        },
        {
            id: 2,
            name: "Chevening Scholarships",
            entity: "UK Government",
            description: "Financiaci\u00f3n TOTAL para maestr\u00edas de 1 a\u00f1o en UK. Buscan l\u00edderes futuros. Aplicaciones abren en Agosto.",
            deadline: "Noviembre 2025",
            link: "https://www.chevening.org/scholarship/colombia/",
            tags: ["UK", "Full Ride", "Leadership"]
        },
        {
            id: 3,
            name: "Becas OEA",
            entity: "Organizaci\u00f3n de Estados Americanos",
            description: "Hasta USD 10.000 anuales para posgrados en pa\u00edses miembros. Prioridad en desarrollo y tecnolog\u00eda.",
            deadline: "Variable",
            link: "https://www.oas.org/es/becas/",
            tags: ["Latam/USA", "Development"]
        }
    ],
    empleos_simulados: [
        {
            id: 1,
            role: "Data Scientist (Economics Background)",
            company: "Rappi / Fintech Latam",
            location: "Remoto / Bogot\u00e1",
            description: "Optimizaci\u00f3n de riesgo crediticio usando Causal ML. Valoran economistas que programen en Python.",
            skills: ["Causal Inference", "Python", "SQL"],
            salary: "$12M - $18M COP",
            link: "https://www.linkedin.com/jobs/search/?keywords=data%20scientist%20economist&location=Colombia"
        },
        {
            id: 2,
            role: "Especialista en Evaluaci\u00f3n de Impacto",
            company: "DNP / Fedesarrollo",
            location: "Bogot\u00e1",
            description: "Dise\u00f1o de evaluaciones experimentales para pol\u00edticas p\u00fablicas. Requiere Stata/R avanzado.",
            skills: ["Stata", "R", "Impact Evaluation"],
            salary: "$8M - $11M COP",
            link: "https://www.fedesarrollo.org.co/oportunidades"
        },
        {
            id: 3,
            role: "Consultor de Estrategia Junior",
            company: "Roland Berger / McKinsey",
            location: "Bogot\u00e1 / Mexico City",
            description: "An\u00e1lisis de mercados y modelos financieros. Excel avanzado y frameworks de resoluci\u00f3n de problemas.",
            skills: ["Strategy", "Excel", "English"],
            salary: "$9M - $14M COP",
            link: "https://www.rolandberger.com/en/Join/All-Jobs/"
        }
    ],
    cursos: [
        {
            id: 1,
            title: "Crash Course in Causality: Inferring Causal Effects",
            platform: "Coursera (UPenn)",
            type: "Fundamental",
            description: "El curso indispensable. Aprende Matching, IV y Propensity Scores con R.",
            duration: "5 semanas",
            link: "https://www.coursera.org/learn/crash-course-in-causality",
            tags: ["Causal Inference", "R", "Must Have"]
        },
        {
            id: 2,
            title: "MicroMasters in Data, Economics, and Development Policy",
            platform: "edX (MIT)",
            type: "Avanzado",
            description: "Dise\u00f1ado por Esther Duflo. El est\u00e1ndar de oro para economistas del desarrollo modernos.",
            duration: "6-12 meses",
            link: "https://micromasters.mit.edu/dedp/",
            tags: ["MIT", "Development", "Advanced"]
        },
        {
            id: 3,
            title: "Machine Learning for Economists",
            platform: "Causal ML (Susan Athey)",
            type: "Especializado",
            description: "Recursos y papers para aplicar ML a problemas de econom\u00eda (Causal Forests, etc).",
            duration: "Self-paced",
            link: "https://github.com/grf-labs/grf",
            tags: ["Python", "R", "Cutting Edge"]
        },
        {
            id: 4,
            title: "SQL for Data Science",
            platform: "Coursera (UC Davis)",
            type: "T\u00e9cnico",
            description: "La habilidad #1 que te falta para pasar filtros t\u00e9cnicos en empresas tech.",
            duration: "4 semanas",
            link: "https://www.coursera.org/learn/sql-for-data-science",
            tags: ["Tech", "SQL", "Empleabilidad"]
        }
    ]
};
