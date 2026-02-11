import { useState } from "react";
import { Mail, Check } from "lucide-react";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate API
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="section-container">
            <div className="bg-primary/5 dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto border border-transparent dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
                    I'm currently available for freelance projects and full-time opportunities.
                    Send me a message and let's discuss how I can help.
                </p>

                {submitted ? (
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-green-100 dark:border-green-900 flex flex-col items-center animate-fade-in">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-3">
                            <Check size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Message Sent!</h3>
                        <p className="text-gray-500 dark:text-gray-400">I'll get back to you within 24 hours.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                            <input type="text" required className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow text-gray-900 dark:text-white" placeholder="Jane Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input type="email" required className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow text-gray-900 dark:text-white" placeholder="jane@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                            <textarea rows="4" required className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow text-gray-900 dark:text-white" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                            Send Message <Mail size={18} />
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;
