function About() {
    return (
        <section id="about" className="py-24 md:py-20 px-6 md:px-12 border-t dark:border-gray-900 border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-16 items-start">

                    {/* Section Label (Vertical on Desktop) */}
                    <div className="hidden md:block md:col-span-1">
                        <p className="rotate-90 origin-left text-[10px] tracking-[0.5em] uppercase opacity-40 whitespace-nowrap mt-10">
                            Identity — 01
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-7 space-y-12">
                        <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] dark:text-white text-navy-text">
                            Engineering with <br />
                            <span className="italic text-gold-accent">Aesthetic Intent.</span>
                        </h2>

                        <div className="space-y-8 max-w-2xl">
                            <p className="text-xl md:text-2xl font-light leading-relaxed dark:text-gray-300 text-charcoal-navy italic font-serif">
                                "I build full-stack web applications focusing on performance and usability.."
                            </p>

                            <div className="space-y-6 text-base md:text-lg font-light opacity-80 leading-relaxed text-justify">
                                <p>
                                    As a 2025 B.Tech graduate and a former Full-Stack Intern at SoftPro India, I have hands-on experience developing web applications and working with real-world projects.
                                    I have built applications like  <span className="text-gold-accent font-medium">AgriTrade Hub</span> and <span className="text-gold-accent font-medium">Cyber Trace</span>, where I worked on backend development, database integration, and creating responsive user interfaces.

                                </p>
                                <p>
                                    I focus on writing clean, efficient code and building applications that are secure, scalable, and easy to use.
                                </p>
                            </div>
                        </div>

                        {/* Stats / Numbers for Luxury Feel */}
                        <div className="grid grid-cols-2 gap-12 pt-10 border-t dark:border-gray-900 border-gray-100">
                            <div>
                                <h4 className="text-3xl font-serif text-gold-accent">6 <sup> <small>Months</small></sup></h4>
                                <p className="text-[10px] tracking-widest uppercase opacity-50 mt-2">Full-Stack Intern</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif text-gold-accent">10+</h4>
                                <p className="text-[10px] tracking-widest uppercase opacity-50 mt-2">Projects Built</p>
                            </div>
                        </div>
                    </div>

                    {/* Side Decorative Element / Quote Card */}
                    <div className="md:col-span-4 bg-gray-50 dark:bg-gray-900/50 p-10 border border-gray-100 dark:border-gray-800 relative">
                        <span className="absolute -top-4 -left-4 text-6xl font-serif text-gold-accent opacity-20">“</span>
                        <p className="text-sm font-light leading-loose opacity-70 italic ">
                            Based in Uttar Pradesh, India, I develop scalable web applications using Java, Spring Boot, and modern frontend tools. I have hands-on experience building projects like AgriTrade Hub and Cyber Trace, focusing on performance, security, and usability.
                        </p>
                        <div className="mt-8">
                            <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-gold-accent">Riyaj Ahmad</p>
                            <p className="text-[9px] opacity-40 uppercase tracking-widest">Full-Stack Developer</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;