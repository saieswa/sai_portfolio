import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import About3D from "../components/About3D";
import { slideInFromLeft, slideInFromRight } from "../utils/motion";

const About = () => {
    return (
        <div className="min-h-screen pt-24 px-6 max-w-7xl mx-auto text-white flex flex-col md:flex-row items-center gap-10 overflow-hidden">

            {/* Left Side - Text */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromLeft(0.5)}
                className="flex-1 space-y-6"
            >
                <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    About Me
                </h1>
                <div className="glass p-8 rounded-2xl shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-white/10">
                    <p className="text-gray-300 text-lg leading-relaxed">
                        I am a passionate Full Stack Developer with a knack for building immersive web applications.
                        My expertise spans across modern frontend frameworks like React and Next.js,
                        as well as robust backend systems. I love simpler, cleaner code and beautiful UI designs.
                    </p>
                    <div className="mt-6 space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-secondary">✦</span>
                            <span>Frontend Architecture</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-secondary">✦</span>
                            <span>Interactive 3D Web Experiences</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-secondary">✦</span>
                            <span>Scalable Backend Systems</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Side - 3D Element */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromRight(0.5)}
                className="flex-1 w-full h-[400px] md:h-[600px] flex items-center justify-center relative"
            >
                <div className="w-full h-full absolute inset-0 z-0">
                    <Canvas camera={{ position: [0, 0, 5] }}>
                        <ambientLight intensity={1} />
                        <directionalLight position={[2, 5, 2]} />
                        <About3D />
                    </Canvas>
                </div>
                {/* Glass Frame for visual anchor */}
                <div className="w-[300px] h-[300px] glass rounded-full absolute z-[-1] blur-3xl opacity-30 bg-primary/20" />
            </motion.div>

        </div>
    );
};

export default About;
