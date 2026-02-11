import { motion } from "framer-motion";

const SkillCategory = ({ title, skills, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="mb-8"
        >
            <h3 className="text-2xl font-semibold mb-4 text-secondary">{title}</h3>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(112, 66, 248, 0.2)" }}
                        className="px-4 py-2 glass rounded-full border border-primary/30 text-gray-200 cursor-default hover:border-secondary/50 transition-colors"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const categories = [
        {
            title: "Frontend Development",
            skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Framer Motion", "Git"],
        },
        {
            title: "AI / ML / DL",
            skills: ["Python", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn"],
        },
        {
            title: "Web Design",
            skills: ["Figma", "Canva", "Adobe Express"],
        },
        {
            title: "Languages",
            skills: ["Java", "Python", "R", "SQL"],
        },
        {
            title: "Databases & Backend",
            skills: ["MySQL", "Cassandra", "Redis", "MongoDB", "Node.js"],
        },
    ];

    return (
        <div className="min-h-screen pt-24 px-6 max-w-7xl mx-auto text-white pb-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                    Technical Proficiency
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    A comprehensive overview of my technical skills and tools I use to build digital products.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat, index) => (
                    <div key={index} className="glass p-6 rounded-2xl hover:shadow-[0_0_20px_rgba(112,66,248,0.3)] transition-shadow duration-300">
                        <SkillCategory title={cat.title} skills={cat.skills} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
