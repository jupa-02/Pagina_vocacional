export const realOpportunities = {
    scholarships: [
        {
            id: 'icetex_2025',
            name: "Beca de Posgrado Gobierno de Colombia (ICETEX)",
            provider: "ICETEX / Gobierno Nacional",
            deadline: "Junio 2025",
            coverage: "100% Matrícula + Estipendio Mensual (3 SMLV) + Salud",
            target: ["masters", "policyWonk", "researcher"],
            description: "La beca más prestigiosa para posgrados en Colombia. Ideal para programas de Economía y Políticas Públicas en universidades acreditadas.",
            link: "https://web.icetex.gov.co/becas/becas-para-estudios-en-el-exterior"
        },
        {
            id: 'oea_unir',
            name: "Becas OEA - Maestrías",
            provider: "OEA (Organización de Estados Americanos)",
            deadline: "Marzo 2026",
            coverage: "60% Descuento en Matrícula",
            target: ["businessEconomist", "techEconomist", "remote"],
            description: "Alta disponibilidad para programas virtuales y a distancia. Excelente para perfiles que buscan flexibilidad y certificación internacional.",
            link: "http://www.oas.org/es/becas/"
        },
        {
            id: 'colfuturo',
            name: "Crédito Beca COLFUTURO",
            provider: "COLFUTURO",
            deadline: "Febrero 2026",
            coverage: "Hasta USD 50,000 (25-50% condonable)",
            target: ["researcher", "policyWonk", "top_tier"],
            description: "El estándar de oro para estudiar en las mejores universidades del mundo (LSE, Harvard, MIT). Requiere admisión previa.",
            link: "https://www.colfuturo.org/"
        },
        {
            id: 'ser_mineducacion',
            name: "Becas SER",
            provider: "Ministerio de Educación Nacional",
            deadline: "Variable",
            coverage: "Variable (Apoyo sostenimiento/matrícula)",
            target: ["undergrad", "social_mobility"],
            description: "Fomento a la educación superior para estratos 1, 2 y 3. Revisar convocatorias de universidades específicas.",
            link: "https://www.mineducacion.gov.co/"
        }
    ],
    universityPrograms: [
        {
            id: 'uniandes_econ',
            university: "Universidad de los Andes",
            program: "Maestría en Economía (PEG)",
            type: "Masters",
            ranking: "#1 en Colombia (THE Rankings)",
            tags: ["researcher", "policyWonk"],
            description: "El programa líder en investigación económica en el país. Enfoque riguroso en teoría y métodos cuantitativos. Puerta de entrada al Banco de la República.",
            location: "Bogotá"
        },
        {
            id: 'uniandes_ds',
            university: "Universidad de los Andes",
            program: "Pregrado en Ciencia de Datos",
            type: "Undergrad",
            ranking: "Pionero en la región",
            tags: ["techEconomist", "innovation"],
            description: "Programa interdisciplinario único que combina Ingeniería, Matemáticas y Economía. Ideal para el perfil 'Econ-Data Scientist'.",
            location: "Bogotá"
        },
        {
            id: 'javeriana_ds',
            university: "Pontificia Universidad Javeriana",
            program: "Ciencia de Datos",
            type: "Undergrad",
            ranking: "Top 3 Colombia",
            tags: ["techEconomist", "corporate"],
            description: "Primer programa de Ciencia de Datos lanzado en Colombia. Fuerte enfoque en aplicación empresarial y ética de datos.",
            location: "Bogotá"
        },
        {
            id: 'nacional_stats',
            university: "Universidad Nacional de Colombia",
            program: "Estadística / Ciencias de la Computación",
            type: "Undergrad",
            ranking: "#1 Investigación Pública",
            tags: ["researcher", "techEconomist"],
            description: "La mejor opción pública. Formación técnica extremadamente sólida. Gran prestigio académico y de investigación.",
            location: "Nivel Nacional"
        },
        {
            id: 'externado_ds',
            university: "Universidad Externado",
            program: "Ciencia de Datos",
            type: "Undergrad",
            ranking: "Enfoque Social/Financiero",
            tags: ["businessEconomist", "policyWonk"],
            description: "Enfoque único en Finanzas Descentralizadas (DeFi) y análisis de fenómenos sociales. Menos 'ingenieril', más aplicado.",
            location: "Bogotá"
        },
    ],
    jobs: [
        {
            id: 'nubank_ds',
            role: "Data Analyst / Scientist",
            company: "NuBank Colombia",
            location: "Bogotá / Híbrido",
            type: "Tech",
            tags: ["techEconomist", "businessEconomist"],
            description: "NuBank busca constantemente analistas con fuertes habilidades en SQL y Python para sus equipos de Riesgo y Crédito.",
            link: "https://nubank.com.br/en/careers/"
        },
        {
            id: 'fedesarrollo_jr',
            role: "Asistente de Investigación",
            company: "Fedesarrollo",
            location: "Bogotá",
            type: "Policy",
            tags: ["policyWonk", "researcher"],
            description: "El 'semillero' de los economistas más influyentes del país. Ideal para quienes buscan (luego) un PhD.",
            link: "https://www.fedesarrollo.org.co/convocatorias"
        },
        {
            id: 'bancolombia_bi',
            role: "Analista de Inteligencia de Negocios",
            company: "Grupo Bancolombia",
            location: "Medellín / Remoto",
            type: "Corporate",
            tags: ["businessEconomist", "corporative"],
            description: "Rol clave para monitorear indicadores financieros y comerciales. Valoran mucho el manejo de PowerBI y SQL.",
            link: "https://empleo.grupobancolombia.com/"
        },
        {
            id: 'dnp_asesor',
            role: "Contratista / Asesor Jr.",
            company: "DNP (Departamento Nacional de Planeación)",
            location: "Bogotá",
            type: "Public",
            tags: ["policyWonk", "researcher"],
            description: "Trabaja en el diseño real de políticas públicas. Gran exposición al funcionamiento del Estado.",
            link: "https://www.dnp.gov.co/atencion-al-ciudadano/ofertas-de-empleo"
        },
        {
            id: 'mckinsey_ba',
            role: "Business Analyst",
            company: "McKinsey & Company",
            location: "Bogotá",
            type: "Consulting",
            tags: ["businessEconomist", "top_tier"],
            description: "La escuela de negocios más acelerada del mundo. Buscan perfiles con excelencia académica y liderazgo.",
            link: "https://www.mckinsey.com/careers/search-jobs"
        }
    ],
    courses: [
        {
            id: 'coursera_metrics',
            title: "Econometrics: Methods and Applications",
            platform: "Coursera / Erasmus University",
            type: "Teoría",
            tags: ["researcher", "policyWonk"],
            description: "El curso estándar para repasar econometría rigurosa. Cubre desde OLS hasta variables instrumentales.",
            link: "https://www.coursera.org/learn/erasmus-econometrics"
        },
        {
            id: 'datacamp_python',
            title: "Data Scientist with Python Track",
            platform: "DataCamp",
            type: "Técnico",
            tags: ["techEconomist", "businessEconomist"],
            description: "Ruta completa: Python, Pandas, Matplotlib y Scikit-learn. Práctico e interactivo.",
            link: "https://www.datacamp.com/tracks/data-scientist-with-python"
        },
        {
            id: 'google_da',
            title: "Google Data Analytics Certificate",
            platform: "Coursera / Google",
            type: "Certificación",
            tags: ["businessEconomist", "corporative"],
            description: "Certificación muy reconocida por empleadores corporativos. Enfoque en R y Tableau/Viz.",
            link: "https://www.coursera.org/professional-certificates/google-data-analytics"
        },
        {
            id: 'mit_micromasters',
            title: "MicroMasters in Data, Economics, and Development Policy",
            platform: "EdX / MIT",
            type: "Avanzado",
            tags: ["policyWonk", "researcher"],
            description: "Casi una maestría. Diseñado por Esther Duflo y Abhijit Banerjee (Nobeles). Rigor total.",
            link: "https://micromasters.mit.edu/dedp/"
        }
    ]
};
