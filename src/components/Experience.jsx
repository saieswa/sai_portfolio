import { Briefcase } from "lucide-react";

const ExperienceItem = ({ role, company, date, description, tech }) => (
    <div className="relative pl-8 md:pl-0">
        {/* Timeline Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>

        <div className={`md:flex justify-between items-center w-full mb-8 ${!!(parseInt(date) % 2) ? 'flex-row-reverse' : ''}`}>
            <div className="hidden md:block w-5/12"></div>

            {/* Icon */}
            <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-white border-2 border-primary rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10">
                <Briefcase size={14} className="text-primary" />
            </div>

            <div className="w-full md:w-5/12 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-sm font-semibold text-primary mb-1 block">{date}</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{role}</h3>
                <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">{company}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tech.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-50 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300 rounded border border-gray-100 dark:border-gray-600">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const Experience = () => {
    const experiences = [
        {
            role: "Students’ Welfare Support Team Member",
            company: "Vellore Institute of Technology, Chennai",
            description: "Created engaging visual content and supported social media outreach for student initiatives.Developed strong skills in teamwork, time management, creativity, and innovation.",
            tech: ["Canva", "Social Media", "Teamwork"]
        },
        {
            role: "Visual Media Lead",
            company: "AI Club, VIT Chennai",
            description: "Managed social media presence and created engaging visual content for the club.Boosted audience engagement through creative and consistent design.",
            tech: ["Canva", "Social Media", "Teamwork"]
        },
        {
            role: "Design Lead – Vibrance",
            company: "VIT Chennai",
            description: "Led design efforts for event posters, banners, IDs, and promotional materials.Ensured visually consistent and attractive designs under tight deadlines.",
            tech: ["Canva", "Social Media", "Teamwork"]
        },
        {
            role: "Technovit – Disciplinary Committee Member",
            company: "VIT Chennai",
            description: "Collaborated with diverse teams to support event coordination and smooth operations.Strengthened communication, teamwork, and networking skills through active collaboration.",
            tech: ["Communication", "Teamwork", "Coordination"]
        },
        {
            role: "Campus Ambassador (Internship)",
            company: "E-Cell, IIT Bombay",
            description: " Represented E-Cell on campus and promoted entrepreneurial initiatives.Improved outreach, communication, and organizational skills.",
            tech: ["Outreach","Communication", "Teamwork", "Event Promotion"]
        },
        
    ];

    return (
        <div className="section-container">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Experience</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl">
                My professional journey and key achievements being a developer.
            </p>

            <div className="relative space-y-8 md:space-y-0">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </div>
        </div>
    );
};

export default Experience;
