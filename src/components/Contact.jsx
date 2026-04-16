
import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {

    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_d8i9aov',
            'template_r57oewb',
            e.target,
            '9onxTuPbExB9u2pbZ'
        )
            .then(() => {
                setStatus("success");
                setTimeout(() => setStatus(null), 3000);
            })
            .catch(() => {
                setStatus("error");
                setTimeout(() => setStatus(null), 3000);
            });
    };

    return (
        <section id="contact" className="py-24 md:py-30 px-6 md:px-12 border-t border-gray-100 dark:border-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-20">

                    {/* Left Side: Contact Info */}
                    <div className="lg:col-span-6 space-y-12">
                        <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] dark:text-white text-navy-text">
                            Let’s start a <br />
                            <span className="italic text-gold-accent">conversation.</span>
                        </h2>

                        <div className="space-y-10">
                            <p className="text-xl md:text-2xl font-light opacity-70 max-w-md leading-relaxed">
                                Whether you have a question about a project or just want to say hi, my inbox is always open.
                            </p>

                            <div className="space-y-6">
                                <div className="group">
                                    <p className="text-[10px] tracking-[0.4em] uppercase text-gold-accent font-black mb-3">Email Me</p>
                                    <a href="mailto:riyaj.ahmad@email.com" className="text-2xl md:text-3xl font-serif dark:text-soft-white text-navy-text border-b border-gray-200 dark:border-gray-800 group-hover:border-gold-accent transition-all duration-500 pb-2">
                                        riyajahmad2906475@gmail.com
                                    </a>
                                </div>

                                <div className="group">
                                    <p className="text-[10px] tracking-[0.4em] uppercase text-gold-accent font-black mb-3">Location</p>
                                    <p className="text-2xl md:text-3xl font-serif dark:text-soft-white text-navy-text opacity-80">
                                        Lucknow, UP — India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Minimalist Form */}
                    <div className="lg:col-span-6 bg-gray-50/50 dark:bg-white/[0.02] p-8 md:p-12 border border-gray-100 dark:border-gray-900 relative">
                        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold-accent/20"></div>

                        {/* ✅ Status Message */}
                        {status === "success" && (
                            <div className="mb-6 p-4 border border-green-300 bg-green-50 text-green-700 text-sm tracking-wide">
                                Message sent successfully ✨
                            </div>
                        )}

                        {status === "error" && (
                            <div className="mb-6 p-4 border border-red-300 bg-red-50 text-red-700 text-sm tracking-wide">
                                Something went wrong. Please try again.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-10">

                            <div className="relative group">
                                <label className="text-[10px] uppercase tracking-widest opacity-40 group-focus-within:text-gold-accent transition-colors">Full Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Enter your name"
                                    className="w-full bg-transparent border-b border-gray-200 dark:border-gray-800 py-4 outline-none focus:border-gold-accent transition-all font-light"
                                />
                            </div>

                            <div className="relative group">
                                <label className="text-[10px] uppercase tracking-widest opacity-40 group-focus-within:text-gold-accent transition-colors">Email Address</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="email@example.com"
                                    className="w-full bg-transparent border-b border-gray-200 dark:border-gray-800 py-4 outline-none focus:border-gold-accent transition-all font-light"
                                />
                            </div>

                            <div className="relative group">
                                <label className="text-[10px] uppercase tracking-widest opacity-40 group-focus-within:text-gold-accent transition-colors">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Tell me about your project"
                                    className="w-full bg-transparent border-b border-gray-200 dark:border-gray-800 py-4 outline-none focus:border-gold-accent transition-all font-light resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full py-5 bg-navy-text dark:bg-gold-accent text-white dark:text-black font-bold uppercase tracking-[0.3em] text-[10px] transition-all hover:bg-gold-accent hover:text-black dark:hover:bg-white active:scale-95">
                                Send Message —→
                            </button>
                        </form>

                    </div>

                </div>
            </div>
        </section >
    );
}

export default Contact;