import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
    const [formState, setFormState] = useState("idle"); // idle, submitting, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState("submitting");
        // Simulate API call
        setTimeout(() => {
            setFormState("success");
        }, 2000);
    };

    return (
        <div className="min-h-screen pt-24 px-6 max-w-7xl mx-auto text-white pb-20 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                    Get In Touch
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="glass p-8 rounded-2xl w-full max-w-2xl border border-white/10 relative overflow-hidden"
            >
                {/* Decorative background gradients */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full pointer-events-none" />

                {formState === "success" ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                    >
                        <CheckCircle size={64} className="text-green-400 mb-4" />
                        <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                        <button
                            onClick={() => setFormState("idle")}
                            className="mt-8 text-secondary hover:text-white underline cursor-pointer"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Email</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Message</label>
                            <textarea
                                required
                                rows="5"
                                placeholder="Hello, I'd like to talk about..."
                                className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                            />
                        </div>
                        <button
                            disabled={formState === "submitting"}
                            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {formState === "submitting" ? (
                                <span className="animate-pulse">Sending...</span>
                            ) : (
                                <>
                                    Send Message <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
    );
};

export default Contact;
