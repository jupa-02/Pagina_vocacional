export const diagnosisQuestions = [
    // --- PART 1: INTERESTS (RIASEC - The "What you love") ---
    {
        id: 1,
        category: "Interests",
        dimension: "Realistic",
        text: "¿Qué actividad prefieres en un día libre?",
        options: [
            { label: "Armar o reparar objetos físicos (bicicletas, muebles, PCs)", value: "realistic", weight: 2 },
            { label: "Leer sobre temas científicos o curiosidades", value: "investigative", weight: 2 },
            { label: "Escribir, pintar o crear música", value: "artistic", weight: 2 },
            { label: "Organizar una reunión con amigos", value: "social", weight: 2 }
        ]
    },
    {
        id: 2,
        category: "Interests",
        dimension: "Investigative",
        text: "Cuando te enfrentas a un problema complejo, tú...",
        options: [
            { label: "Buscas datos y analizas las causas raíz", value: "investigative", weight: 3 },
            { label: "Buscas una solución práctica e inmediata", value: "realistic", weight: 2 },
            { label: "Pides opiniones a otras personas", value: "social", weight: 2 },
            { label: "Imaginas una solución novedosa y creativa", value: "artistic", weight: 2 }
        ]
    },
    {
        id: 3,
        category: "Interests",
        dimension: "Artistic",
        text: "¿Qué tipo de proyectos te entusiasman más?",
        options: [
            { label: "Aquellos donde puedo expresar mi identidad única", value: "artistic", weight: 3 },
            { label: "Los que tienen reglas claras y objetivos definidos", value: "conventional", weight: 2 },
            { label: "Donde puedo liderar y convencer a otros", value: "enterprising", weight: 2 },
            { label: "Proyectos de ayuda comunitaria", value: "social", weight: 2 }
        ]
    },
    {
        id: 4,
        category: "Interests",
        dimension: "Social",
        text: "En un equipo de trabajo, ¿cuál es tu rol natural?",
        options: [
            { label: "El mediador que asegura que todos estén bien", value: "social", weight: 3 },
            { label: "El líder que toma las decisiones difíciles", value: "enterprising", weight: 2 },
            { label: "El experto técnico que resuelve dudas", value: "investigative", weight: 2 },
            { label: "El organizador que lleva el control de la agenda", value: "conventional", weight: 2 }
        ]
    },
    {
        id: 5,
        category: "Interests",
        dimension: "Enterprising",
        text: "¿Te sientes cómodo vendiendo una idea o producto a extraños?",
        options: [
            { label: "Me encanta, disfruto convenciendo", value: "enterprising", weight: 3 },
            { label: "Lo hago si es necesario, pero prefiero no hacerlo", value: "conventional", weight: 1 },
            { label: "Prefiero que mi trabajo hable por sí mismo", value: "realistic", weight: 2 },
            { label: "Depende si creo en la causa", value: "social", weight: 2 }
        ]
    },

    // --- PART 2: SKILLS (Ikigai - "What you are good at") ---
    {
        id: 6,
        category: "Skills",
        dimension: "Analytical",
        text: "¿Qué tan fácil te resulta encontrar patrones en grandes cantidades de información?",
        options: [
            { label: "Muy fácil, es como un juego para mí", value: "analytical", weight: 3 },
            { label: "Puedo hacerlo, pero me cansa", value: "analytical", weight: 1 },
            { label: "Prefiero enfocarme en los detalles cualitativos", value: "creative", weight: 2 },
            { label: "Se me da fatal", value: "analytical", weight: 0 }
        ]
    },
    {
        id: 7,
        category: "Skills",
        dimension: "Creative",
        text: "Si tuvieras que diseñar una campaña de marketing...",
        options: [
            { label: "Se me ocurren 10 ideas locas en un minuto", value: "creative", weight: 3 },
            { label: "Investigo qué ha funcionado antes y lo replico", value: "conventional", weight: 2 },
            { label: "Analizo el mercado para ver qué falta", value: "investigative", weight: 2 },
            { label: "Me enfoco en cómo conectará con las emociones de la gente", value: "social", weight: 2 }
        ]
    },
    {
        id: 8,
        category: "Skills",
        dimension: "Management",
        text: "¿Qué tan organizado eres con tu tiempo y dinero?",
        options: [
            { label: "Tengo excels para todo y cumplo mis planes", value: "conventional", weight: 3 },
            { label: "Soy organizado en mi caos", value: "creative", weight: 1 },
            { label: "Delego esas tareas siempre que puedo", value: "enterprising", weight: 1 },
            { label: "Vivo el día a día", value: "realistic", weight: 0 }
        ]
    },

    // --- PART 3: VALUES & LIFESTYLE (Ikigai - "What the world needs" / "What you can be paid for") ---
    {
        id: 9,
        category: "Values",
        dimension: "Impact",
        text: "Para ti, el éxito profesional significa...",
        options: [
            { label: "Hacer una diferencia tangible en la vida de otros", value: "social_impact", weight: 3 },
            { label: "Alcanzar independencia financiera y prestigio", value: "wealth", weight: 3 },
            { label: "Innovar y descubrir cosas nuevas", value: "innovation", weight: 3 },
            { label: "Tener estabilidad y equilibrio vida-trabajo", value: "stability", weight: 3 }
        ]
    },
    {
        id: 10,
        category: "Values",
        dimension: "Environment",
        text: "¿En qué ambiente te ves trabajando más feliz?",
        options: [
            { label: "Una oficina corporativa en un rascacielos", value: "corporate", weight: 3 },
            { label: "Un laboratorio o centro de investigación silencioso", value: "academic", weight: 3 },
            { label: "Viajando y conociendo gente nueva cada día", value: "field", weight: 3 },
            { label: "Desde mi casa (remoto) o un café", value: "remote", weight: 3 }
        ]
    },
    {
        id: 11,
        category: "Values",
        dimension: "Risk",
        text: "¿Qué prefieres?",
        options: [
            { label: "Un salario fijo alto pero con pocas sorpresas", value: "stability", weight: 3 },
            { label: "Ingresos variables que dependen de mis resultados (sin techo)", value: "risk_taker", weight: 3 },
            { label: "Un salario modesto pero haciendo lo que amo", value: "passion", weight: 3 },
            { label: "Trabajar por proyectos y tener libertad", value: "freelance", weight: 3 }
        ]
    },
    {
        id: 12,
        category: "Values",
        dimension: "Collaboration",
        text: "¿Prefieres trabajar solo o en grupo?",
        options: [
            { label: "Solo, en mi zona, sin interrupciones", value: "solo", weight: 3 },
            { label: "En un equipo pequeño de alta confianza", value: "team_small", weight: 2 },
            { label: "Liderando grupos grandes", value: "team_lead", weight: 3 },
            { label: "Colaborando con muchas áreas distintas", value: "networker", weight: 2 }
        ]
    }
];
