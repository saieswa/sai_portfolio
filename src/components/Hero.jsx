import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-background dark:bg-gray-900 px-6 pt-20">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

                {/* Left Column: Social Links */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:flex flex-col gap-6 md:col-span-1 items-center"
                >
                    <a href="https://github.com/saieswa" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors"><Github size={24} /></a>
                    <a href="https://www.linkedin.com/in/sai-eswari-268b3a248/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors"><Linkedin size={24} /></a>
                    <a href="mailto:sai.eswari2004@gmail.com" className="text-gray-500 hover:text-primary transition-colors"><Mail size={24} /></a>
                    <div className="w-px h-24 bg-gray-300 dark:bg-gray-700 mt-2"></div>
                </motion.div>

                {/* Center Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
                        P Sai Eswari <span className="inline-block animate-wave">👋</span>
                    </h1>
                    <div className="flex items-center gap-4">
                        <span className="h-px w-12 bg-gray-400"></span>
                        <span className="text-xl text-gray-600 dark:text-gray-300 font-medium">Software Engineer</span>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                        I’m a software engineer with a strong interest in building clean user interfaces, data-driven systems, and AI-powered applications.
                        I enjoy turning ideas into practical solutions using frontend technologies, machine learning, and analytics, while always focusing on usability and real-world impact.
                    </p>
                    <a
                        href="#contact"
                        className="btn-primary flex items-center gap-2 group"
                        onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}
                    >
                        Say Hello <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    {/* Mobile Socials */}
                    <div className="flex md:hidden gap-6 pt-4">
                        <a href="https://github.com/saieswa" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/sai-eswari-268b3a248/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary"><Linkedin size={24} /></a>
                        <a href="mailto:sai.eswari2004@gmail.com" className="text-gray-500 hover:text-primary"><Mail size={24} /></a>
                    </div>
                </motion.div>

                {/* Right Column: Blob Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="md:col-span-5 flex justify-center md:justify-end relative"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-primary/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob filter blur-xl"></div>
                        <div className="relative w-full h-full rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                            <img
                                src="/profile.jpg"
                                alt="P Sai Eswari"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/400?text=Profile"; // Fallback
                                }}
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
