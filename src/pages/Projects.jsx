import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const projects = [
        {
            title: "AI Portfolio Website",
            description: "A futuristic portfolio website built with React, Three.js, and Framer Motion featuring 3D interactions.",
            tech: ["React", "Three.js", "Framer Motion", "Tailwind"],
            github: "#",
            live: "#"
        },
        {
            title: "E-Commerce Dashboard",
            description: "Full-stack admin dashboard for managing products, orders, and users with real-time analytics.",
            tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
            github: "#",
            live: "#"
        },
        {
            title: "Smart Home App",
            description: "Mobile-first web application for controlling IoT devices with voice commands and automation.",
            tech: ["React Native", "Firebase", "Node.js", "MQTT"],
            github: "#",
            live: "#"
        }
    ];

    return (
        <div className="min-h-screen pt-24 px-6 max-w-7xl mx-auto text-white pb-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                    Featured Projects
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Showcasing my journey in building scalable and interactive applications.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
