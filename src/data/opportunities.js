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
            id: 'beca_santander',
            name: "Becas Santander Estudios",
            provider: "Banco Santander",
            deadline: "Abierto todo el año",
            coverage: "Variable (Cursos + Manutención)",
            target: ["corporative", "businessEconomist", "undergrad"],
            description: "Programas de apoyo para desarrollo de habilidades empresariales, idiomas y tecnología.",
            link: "https://www.becas-santander.com/"
        },
        {
            id: 'fun_carolina',
            name: "Becas Fundación Carolina",
            provider: "Fundación Carolina (España)",
            deadline: "Marzo 2026",
            coverage: "Tiquetes + Seguro + Matrícula parcial/total",
            target: ["corporative", "policyWonk", "masters"],
            description: "Excelente para MBAs y maestrías en Negocios en España. Muy competitiva pero de alto valor curricular.",
            link: "https://www.fundacioncarolina.es/"
        }
    ],
    universityPrograms: [
        {
            id: 'uniandes_finanzas',
            university: "Universidad de los Andes",
            program: "Maestría en Finanzas",
            type: "Masters",
            ranking: "#1 Finanzas Colombia",
            tags: ["corporative", "businessEconomist"],
            description: "Formación de élite para banca de inversión y finanzas corporativas. Networking inigualable.",
            location: "Bogotá"
        },
        {
            id: 'ceipa_gerencia',
            university: "CEIPA",
            program: "Gerencia Financiera",
            type: "Specialization",
            ranking: "Enfoque Práctico",
            tags: ["corporative", "remote"],
            description: "Ideal para quienes trabajan. Enfoque 100% aplicado a la toma de decisiones gerenciales.",
            location: "Virtual / Medellín"
        },
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
            tags: ["techEconomist", "corporative"],
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
            id: 'utb_innovacion',
            university: "Universidad Tecnológica de Bolívar (UTB)",
            program: "Maestría en Gestión de Innovación",
            type: "Masters",
            ranking: "Top Regional (Cartagena)",
            tags: ["corporative", "businessEconomist", "innovation"],
            description: "El programa líder en el Caribe para gerentes que buscan liderar la transformación digital desde Cartagena.",
            location: "Cartagena"
        },
        {
            id: 'unicartagena_amb',
            university: "Universidad de Cartagena",
            program: "Maestría en Ciencias Ambientales",
            type: "Masters",
            ranking: "Pública Acreditada",
            tags: ["policyWonk", "researcher", "social_impact"],
            description: "Formación rigurosa en sostenibilidad y políticas públicas ambientales. Ideal para perfiles de impacto social regional.",
            location: "Cartagena"
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
    ],
    jobs: [
        {
            id: 'reficar_ing',
            role: "Ingeniero de Planeación / Analista",
            company: "Reficar / Ecopetrol",
            location: "Cartagena",
            type: "Industrial",
            tags: ["corporative", "techEconomist"],
            description: "Oportunidades clave en la industria más grande de la región. Buscan perfiles analíticos y de ingeniería.",
            link: "https://jobs.ecopetrol.com.co/"
        },
        {
            id: 'ctg_tourism',
            role: "Gerente de Proyectos Turísticos",
            company: "Corpoturismo",
            location: "Cartagena",
            type: "Public/Private",
            tags: ["businessEconomist", "social_mobility"],
            description: "Lidera la estrategia turística de la ciudad. Requiere visión de negocios y política pública.",
            link: "https://cartagenadeindias.travel/"
        },
        {
            id: 'bavaria_mt',
            role: "Global Management Trainee (GMT)",
            company: "Bavaria (AB InBev)",
            location: "Bogotá / Global",
            type: "Corporate",
            tags: ["corporative", "top_tier"],
            description: "El programa de semillero más famoso del mundo corporativo. Rotación por todas las áreas de la compañía.",
            link: "https://www.bavaria.co/talento"
        },
        {
            id: 'jp_morgan',
            role: "Corporate Analyst",
            company: "J.P. Morgan",
            location: "Bogotá",
            type: "Finance",
            tags: ["corporative", "businessEconomist"],
            description: "Entra a la banca de inversión global desde Bogotá. Operaciones financieras de alto nivel.",
            link: "https://careers.jpmorgan.com/US/en/home"
        },
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
            tags: ["businessEconomist", "top_tier", "corporative"],
            description: "La escuela de negocios más acelerada del mundo. Buscan perfiles con excelencia académica y liderazgo.",
            link: "https://www.mckinsey.com/careers/search-jobs"
        }
    ],
    courses: [
        {
            id: 'sena_adsi',
            title: "Análisis y Desarrollo de Sistemas (ADSO)",
            platform: "SENA Sofía Plus",
            type: "Tecnólogo",
            tags: ["techEconomist", "social_mobility", "all"],
            description: "El programa técnico más robusto de Colombia. Gratuito y con alta empleabilidad inmediata.",
            link: "http://oferta.senasofiaplus.edu.co/sofia-oferta/"
        },
        {
            id: 'harvard_business',
            title: "Business Analytics",
            platform: "Harvard Online",
            type: "Certificación",
            tags: ["businessEconomist", "corporative", "top_tier"],
            description: "Sello de calidad Harvard. Aprende a tomar decisiones basadas en datos con rigor académico.",
            link: "https://online.hbs.edu/courses/business-analytics/"
        },
        {
            id: 'pm_google',
            title: "Project Management Professional Certificate",
            platform: "Coursera / Google",
            type: "Certificación",
            tags: ["corporative", "management"],
            description: "La certificación estándar para entrar al mundo de la gestión de proyectos corporativos modernos.",
            link: "https://www.coursera.org/professional-certificates/google-project-management"
        },
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
