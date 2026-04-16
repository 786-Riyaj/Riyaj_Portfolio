
function Experience() {
    const experiences = [
        {
            year: "2025 — 2026",
            role: "Full-Stack Developer Intern ",
            company: "SoftPro India",
            location: "Lucknow, Uttar Pradesh, IN",
            desc: "Worked on Java-based web applications using Spring Boot and MySQL. Developed and maintained backend services and responsive frontend interfaces.",
            achievements: ["Developed full-stack applications using Java and Spring Boot", "Built responsive UI using HTML, CSS, JavaScript, Bootstrap", "Worked on REST APIs and database integration (MySQL)", "Implemented authentication and authorization in applications"]
        },
        {
            year: "2024 — 2024",
            role: "Full-Stack Web Development Intern",
            company: "Next24tech Technology & Services",
            location: "Remote (Nagpur, India)",
            desc: "Completed a 2-month internship focused on building modern web applications using full-stack technologies. Gained hands-on experience in developing both frontend interfaces and backend functionalities.",
            achievements: ["Designed and developed dynamic web applications using modern web technologies", "Implemented responsive user interfaces for better user experience", "Worked on integrating frontend with backend services", "Gained practical exposure to real-world development workflows"]
        },

        {
            year: "2024 — 2024",
            role: "Python Developer Intern",
            company: "CodeSpeedy Technology Pvt. Ltd.",
            location: "Remote (Kolkata, India)",
            desc: "Worked as a Python Developer intern, contributing to real-world programming tasks and publishing technical content for the developer community.",
            achievements: ["Developed Python-based solutions for practical coding problems",
                "Created and published technical articles for developers",
                "Improved problem-solving and debugging skills",
                "Gained experience in writing clean and efficient code"]
        },
        {
            year: "2022 — 2025",
            role: "B.Tech (Computer Science & Engineering)",
            company: "- Azad Institute of Engineering & Technology",
            location: "Lucknow, Uttar Pradesh, IN",
            desc: "Completed engineering in Computer Science with focus on programming, databases, and software development.",
            achievements: ["Strong foundation in Java, OOP, and MySQL", "Developed academic and project-based web applications", "Gained knowledge of software development lifecycle and basic system design"]
        },
        {
            year: "2019 — 2022",
            role: "Diploma (Computer Science & Engineering)",
            company: "Government Polytechnic Premdhar Patti, Pratapgarh",
            location: "Pratapgarh, Uttar Pradesh, IN",
            desc: "Completed diploma in Computer Science with focus on programming fundamentals, databases, and web development basics.",
            achievements: ["Learned basic programming concepts in Java", "Gained understanding of databases and web development", "Built foundation in computer science and software development"]
        }
    ];

    return (
        <section id="experience" className="py-24 md:py-15 px-6 md:px-12 border-t border-gray-100 dark:border-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-24">
                    <h2 className="text-5xl md:text-7xl font-serif dark:text-white text-navy-text italic leading-tight">
                        Career <br /> <span className="not-italic block ml-30">Journey</span>
                    </h2>
                    <p className="max-w-xs text-[10px] tracking-[0.4em] uppercase opacity-40 mt-6 md:mt-0 md:text-right">
                        Professional experience and academic background in Full-Stack Development.

                    </p>
                </div>

                {/* Timeline List */}
                <div className="space-y-24">
                    {experiences.map((exp, i) => (
                        <div key={i} className="group relative grid md:grid-cols-12 gap-8 md:gap-12">
                            {/* Year & Location */}
                            <div className="md:col-span-3">
                                <span className="text-sm tracking-[0.3em] text-gold-accent font-black block mb-2">
                                    {exp.year}
                                </span>
                                <span className="text-[10px] tracking-widest uppercase opacity-40">
                                    {exp.location}
                                </span>
                            </div>

                            {/* Role & Company Details */}
                            <div className="md:col-span-9 border-l border-gray-100 dark:border-gray-800 pl-8 md:pl-16 relative">
                                {/* Bullet Point (Luxury Detail) */}
                                <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-gold-accent shadow-[0_0_10px_rgba(194,168,120,0.5)]"></div>

                                <h3 className="text-3xl md:text-4xl font-serif dark:text-gray-200 text-navy-text italic mb-6">
                                    {exp.role}
                                    <span className="not-italic text-lg md:text-xl opacity-40 block md:inline md:ml-4">— {exp.company}</span>
                                </h3>

                                <div className="max-w-2xl space-y-6">
                                    <p className="text-lg font-light dark:text-gray-400 text-charcoal-navy leading-relaxed">
                                        {exp.desc}
                                    </p>

                                    {/* Mini Achievement Tags */}
                                    <div className="flex flex-wrap gap-4 pt-4">
                                        {exp.achievements.map((item, index) => (
                                            <span key={index} className="text-[10px] tracking-widest uppercase border border-gray-200 dark:border-gray-800 px-4 py-2 opacity-60 group-hover:opacity-100 group-hover:border-gold-accent/30 transition-all duration-500">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;