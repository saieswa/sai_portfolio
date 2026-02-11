import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const SocialLinks = () => {
    const links = [
        { icon: <Github size={24} />, href: "https://github.com/saieswa", label: "GitHub" },
        { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/sai-eswari-268b3a248/", label: "LinkedIn" },
        { icon: <Mail size={24} />, href: "mailto:sai.eswari2004@gmail.com", label: "Email" },
    ];

    return (
        <div className="fixed left-6 bottom-0 z-50 flex flex-col gap-4 items-center hidden md:flex">
            <div className="flex flex-col gap-4 after:content-[''] after:w-[1px] after:h-24 after:bg-gray-400 after:mx-auto">
                {links.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-secondary hover:-translate-y-1 transition-all duration-300 transform"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default SocialLinks;
