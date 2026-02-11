import HeroContent from "../components/Hero";
import StarBackground from "../components/StarBackground";

const Home = () => {
    return (
        <main className="h-screen w-full bg-dark overflow-hidden relative">
            <div className="absolute inset-0 z-0 h-full w-full">
                <StarBackground />
            </div>
            <div className="relative z-10 h-full w-full flex flex-col justify-center pointer-events-none">
                {/* Enable pointer events only on interactive children */}
                <div className="pointer-events-auto h-full w-full">
                    <HeroContent />
                </div>
            </div>
        </main>
    );
};

export default Home;
