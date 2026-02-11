import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.2 }
            }}
            className="glass p-6 rounded-2xl relative overflow-hidden group cursor-pointer border border-white/10"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 h-48 bg-black/50 rounded-xl mb-4 overflow-hidden border border-white/5">
                {/* Placeholder for project image */}
                <div className="w-full h-full bg-gradient-to-br from-purple-900 to-black flex items-center justify-center text-gray-500 text-sm">
                    Project Preview
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                            {t}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <a href={project.github} className="text-sm font-bold text-white hover:text-secondary transition-colors underline decoration-dotted">
                        GitHub
                    </a>
                    <a href={project.live} className="text-sm font-bold text-white hover:text-secondary transition-colors underline decoration-dotted">
                        Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
