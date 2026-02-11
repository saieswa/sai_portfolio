import { Award, ExternalLink } from "lucide-react";

const CertificateItem = ({ title, issuer, date, image, link }) => (
    <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
            {image ? (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                        e.target.src = "/certificates/placeholder.svg"; // Fallback
                    }}
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Award size={48} />
                </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {issuer}
                </span>
                {date && <span className="text-xs text-gray-500 dark:text-gray-400">{date}</span>}
            </div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 leading-tight">
                {title}
            </h3>

            <div className="mt-auto pt-4">
                {link ? (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                        View Certificate <ExternalLink size={14} className="ml-1" />
                    </a>
                ) : (
                    <span className="text-sm text-gray-400 cursor-default">Verified</span>
                )}
            </div>
        </div>
    </div>
);

const Certificates = () => {
    // Sample Data - Replace images with actual paths in public/certificates/
    const certificates = [
        {
            title: "Data Analytics and Visualization Job Simulation",
            issuer: "Accenture North America",
            date: "2025",
            image: "/certificates/accenture.png",
            link: "#"
        },
        {
            title: "Goldman Sachs - Operations Job Simulation",
            issuer: "Forage",
            date: "2025",
            image: "/certificates/gold.png",
            link: "#"
        },
        {
            title: "Introduction to Programming Using HTML and CSS,javascript",
            issuer: "Udemy",
            date: "2025",
            image: "/certificates/css,js.png",
            link: "#"
        },
        {
            title: "HACKTHON",
            issuer: "AIC Club,VIT Chennai",
            date: "2024",
            image: "/certificates/HACK.png",
            link: "#"
        },
        {
            title: "100 Days of Code: The Complete Python Pro Bootcamp",
            issuer: "Udemy",
            date: "2025",
            image: "/certificates/python.png",
            link: "#"
        },
        {
            title: "java",
            issuer: "Udemy",
            date: "2025",
            image: "/certificates/java.png",
            link: "#"
        },
        {
            title: "Microsoft Dynamics 365 Certifications",
            issuer: "Microsoft",
            date: "2025",
            image: "/certificates/MICROSOFT.png",
            link: "#"
        },
        {
            title: "Microsoft Dynamics 365 Certifications",
            issuer: "Microsoft",
            date: "2025",
            image: "/certificates/MICROSOFT.png",
            link: "#"
        },
        {
            title: "Google Certified Educator",
            issuer: "Google",
            date: "2023",
            image: "/certificates/google.png",
            link: "#"
        },
        {
            title: "CISCO",
            issuer: "CISCO",
            date: "2023",
            image: "/certificates/cisco_python.png",
            link: "#"
        },
        {
            title: "CISCO",
            issuer: "CISCO",
            date: "2023",
            image: "/certificates/cisco_packet.png",
            link: "#"
        },
        {
            title: "PYTHON FOR DATA SCIENCE ",
            issuer: "IBM",
            date: "2024",
            image: "/certificates/IBM.png",
            link: "#"
        },
        {
            title: "Natural Language Processing ",
            issuer: "Infosys Springboard",
            date: "2024",
            image: "/certificates/INFO_NLP.png",
            link: "#"
        },

        {
            title: "AI ",
            issuer: "Infosys Springboard",
            date: "2024",
            image: "/certificates/info ai.png",
            link: "#"
        },
        {
            title: "Deep Learning ",
            issuer: "Infosys Springboard",
            date: "2024",
            image: "/certificates/dl.png",
            link: "#"
        },
        {
            title: "Computer Vision ",
            issuer: "Infosys Springboard",
            date: "2024",
            image: "/certificates/image.png",
            link: "#"
        }




    ];

    return (
        <div className="section-container bg-surface/50 dark:bg-gray-800/50">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Certifications</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-2xl">
                Recognitions and milestones in my continuous learning journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                    <CertificateItem key={index} {...cert} />
                ))}
            </div>
        </div>
    );
};

export default Certificates;
