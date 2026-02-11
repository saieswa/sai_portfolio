const SkillGroup = ({ title, skills }) => (
    <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">
            {title}
        </h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-sm text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:border-primary transition-colors cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    return (
        <div className="section-container">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Technical Skills</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl">
                Tools and technologies I use to bring ideas to life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-12">
                <SkillGroup
                    title="Frontend Development"
                    skills={["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Vite", "Git"]}
                />
                <SkillGroup
                    title="AI / ML / Data Science"
                    skills={["Python", "TensorFlow", "scikit-learn", "NumPy", "Pandas", "Matplotlib"]}
                />
                <SkillGroup
                    title="Web Design "
                    skills={["Figma", "Canva", "Adobe Express"]}
                />
                <SkillGroup
                    title="Backend & Databases"
                    skills={["Node.js", "Java", "MySQL", "MongoDB", "Redis", "Cassandra"]}
                />
            </div>
        </div>
    );
};

export default Skills;
