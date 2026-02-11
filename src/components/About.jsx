const About = () => {
    return (
        <div className="section-container bg-surface/50 dark:bg-gray-800/50">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/3">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl rotate-3 hover:rotate-0 transition-all duration-500 border-[8px] border-white dark:border-gray-700">
                        <img
                            src="/profile.jpg"
                            alt="P Sai Eswari"
                            className="object-cover w-full h-full"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/400x500?text=Profile";
                            }}
                        />
                    </div>
                </div>

                <div className="w-full md:w-2/3 space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
                    <div className="prose prose-lg text-gray-600 dark:text-gray-300 space-y-4">
                        <p>
                            I am currently pursuing an <strong>Integrated M.Tech in Computer Science (Business Analytics)</strong> at VIT Chennai. 
                            I’m a curious and proactive learner who enjoys exploring both technology and creativity.
                        </p>
                        <p>
                           My interests lie at the intersection of <strong>software development, data analytics, and design.</strong>.
                            I like working on projects that solve real problems, whether it’s through AI-based systems, dashboards, or user-friendly web applications.
                        </p>
                        <p>
                            Alongside technical skills, I value teamwork, time management, and continuous learning, which I’ve developed through various campus roles and projects.
                        </p>
                    </div>

                    <div className="flex gap-8 pt-4">
                        
                        <div>
                            <h3 className="text-3xl font-bold text-primary">10+</h3>
                            <p className="text-gray-500 dark:text-gray-400">Projects Completed</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
