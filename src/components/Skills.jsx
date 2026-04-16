
function Skills() {
    const skills = [
        {
            number: "01",
            title: "Frontend Development",
            tools: "HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, Responsive Web Design"
        },
        {
            number: "02",
            title: "Backend Development",
            tools: "Java (OOP, Collections, Exception Handling, Basic Multithreading), Spring Boot, Hibernate/JPA, REST APIs, MVC Architecture, Authentication & Authorization"
        },
        {
            number: "03",
            title: "Database & Tools",
            tools: "MySQL, Git, GitHub, VS Code, MS Office, CRUD Operations"
        }
    ];

    return (
        <section id="skills" className="py-24 md:py-15 px-6 md:px-12 border-t border-gray-100 dark:border-gray-900 overflow-hidden bg-gray-50/30 dark:bg-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-20">
                    <h2 className="text-[10px] tracking-[0.5em] uppercase text-gold-accent font-black mb-4">Core Expertise</h2>
                    <p className="text-3xl md:text-5xl font-serif dark:text-white text-navy-text italic leading-tight">
                        {/* Specialized in building <br /> high-performance digital solutions. */}
                        Building secure, scalable, <br /> and high-performance full-stack web solutions.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
                    {skills.map((s, i) => (
                        <div key={i} className="group flex flex-col justify-between h-full relative">
                            <div>
                                {/* Background Numbering - Luxury Detail */}
                                <span className="text-6xl font-serif opacity-5 dark:opacity-10 absolute -top-10 -left-4 group-hover:text-gold-accent group-hover:opacity-20 transition-all duration-700">
                                    {s.number}
                                </span>

                                <h3 className="text-sm uppercase tracking-[0.3em] text-gold-accent mb-6 font-bold relative z-10">
                                    {s.title}
                                </h3>

                                <p className="text-lg md:text-xl font-light dark:text-gray-300 text-charcoal-navy leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity ">
                                    {s.tools}
                                </p>
                            </div>

                            {/* Minimal Gold Divider with Motion */}
                            <div className="mt-10">
                                <div className="w-8 group-hover:w-full h-[1px] bg-gold-accent transition-all duration-700 ease-in-out opacity-40"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;