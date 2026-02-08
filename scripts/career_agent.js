const fs = require('fs');
const path = require('path');

// Simulate the agent "Searching" the web and finding new opportunities
// In a real scenario, this would use Puppeteer/Cheerio or APIs
const databasePath = path.join(__dirname, '../src/data/opportunities.json');

const currentData = require(databasePath);

const newJobs = [
    {
        id: Date.now(),
        role: "Economist - Policy Analyst",
        company: "OECD / World Bank",
        location: "Paris / Washington DC (Remote Option)",
        description: "Análisis de políticas estructurales y crecimiento inclusivo. Ingles fluido requerido.",
        skills: ["Stata", "Writing", "Macroeconomics"],
        salary: "$5,000 - $7,000 USD/mo",
        link: "https://www.oecd.org/careers/"
    },
    {
        id: Date.now() + 1,
        role: "Junior Data Analyst",
        company: "NuBank",
        location: "Bogotá / São Paulo",
        description: "Squad de riesgo de crédito. Uso intensivo de SQL y modelos de score.",
        skills: ["SQL", "Python", "Risk"],
        salary: "$6M - $9M COP",
        link: "https://nubank.com.br/en/careers/"
    }
];

// Randomly decide to add a new job to simulate "finding" something
if (Math.random() > 0.0) { // Always add for demo purposes
    const jobToAdd = newJobs[Math.floor(Math.random() * newJobs.length)];

    // Check if similar job exists to avoid duplicates (basic check)
    const exists = currentData.empleos_simulados.some(j => j.role === jobToAdd.role && j.company === jobToAdd.company);

    if (!exists) {
        currentData.empleos_simulados.unshift(jobToAdd);
        // Keep list reasonable size
        if (currentData.empleos_simulados.length > 10) {
            currentData.empleos_simulados.pop();
        }

        console.log(`[AGENT] Found new job opportunity: ${jobToAdd.role} at ${jobToAdd.company}`);
    } else {
        console.log(`[AGENT] No new unique opportunities found today.`);
    }
}

// Write back to file
fs.writeFileSync(databasePath, JSON.stringify(currentData, null, 4));
console.log(`[AGENT] Database updated successfully at ${new Date().toISOString()}`);
