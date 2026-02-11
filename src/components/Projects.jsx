const ProjectItem = ({ title, description, tech, github, live }) => (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 hover:border-primary dark:hover:border-primary hover:shadow-sm transition-all duration-300">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
            <div className="flex gap-4 mt-2 md:mt-0">
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary underline">
                        GitHub
                    </a>
                )}
                {live && (
                    <a href={live} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary underline">
                        Live Demo
                    </a>
                )}
            </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {description}
        </p>
        <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
                <span key={i} className="text-xs font-mono bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded border border-gray-100 dark:border-gray-600">
                    {t}
                </span>
            ))}
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "FreshFlow – Smart Inventory Management System",
            description: "An AI-enabled inventory management system designed for perishable goods. Automates stock tracking, expiry monitoring, and provides AI-based discount recommendations with real-time analytics and chatbot support.",
            tech: ["Flask", "MongoDB", "JavaScript", "Chart.js", "AI/ML"],
            github: "#",
            live: "#"
        },
        {
            title: "AI Resume Matcher",
            description: "An AI-based resume matching tool that semantically ranks resumes against job descriptions using Sentence-BERT, enabling faster and more accurate candidate screening.",
            tech: ["Python", "Flask", "SBERT", "Machine Learning"],
            github: "#",
            live: "#"
        },
        {
            title: "Real-Time Airport Delay Prediction System",
            description: " A real-time machine learning system that predicts flight delays using live flight and weather data. Includes dashboards to monitor delays and airport congestion.",
            tech: ["Python", "Machine Learning", "Kafka", "Redis", "SQL"],
            github: "#",
            live: "#"
        },
        {
            title: "E-commerce Sales Analysis Dashboard",
            description: " An interactive analytics dashboard that visualizes revenue trends, customer behavior, and sales performance using dynamic filters and KPIs.",
            tech: ["Tableau", "Data Analytics", "Data Visualization"],
            github: "#",
            live: "#"
        },
        {
            title: "Fuel Theft Detection System (IoT)",
            description: " An IoT-based fuel theft prevention system using an ESP-32 microcontroller and ultrasonic sensors to monitor fuel levels in real time. Detects abnormal fuel drops and triggers instant alerts through a buzzer and mobile notifications.",
            tech: ["ESP-32", "Ultrasonic Sensor", "IoT", "Arduino IDE", "Blynk"],
            github: "#",
            live: "#"
        }
    ];

    return (
        <div className="section-container bg-surface/30 dark:bg-gray-800/30">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Projects</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-2xl">
                Selected works showcasing my development capabilities.
            </p>
            <div className="space-y-6">
                {projects.map((project, index) => (
                    <ProjectItem key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
