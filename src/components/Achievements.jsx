function Achievements() {
    const certifications = [
        {
            title: "Full stack Web Development & DSA with JAVA",
            issuer: "Apna College",
            date: "2025",
            link: "https://drive.google.com/file/d/12vO8uICMIqw19MOB4MRH374EVhQjWkpS/view?usp=drive_link"
        },
        {
            title: "Web Development",
            issuer: "STP Computer Education",
            date: "2024",
            link: "https://drive.google.com/file/d/16Ii7WvZRpN58azG5qfs80FhNxBRwfh72/view?usp=drive_link"
        },
        {
            title: "Full-Stack Web Development",
            issuer: "Next24tech Technology & Services",
            date: "2024",
            link: "https://drive.google.com/file/d/1iTZtpR_zP3C5AKqM3GDbfskUq4WOhVSZ/view?usp=drive_link"
        },
        {
            title: "Python Developer Internship",
            issuer: "CodeSpeedy Technology Pvt. Ltd.",
            date: "2024",
            link: "https://drive.google.com/file/d/1L5KGicrvIWN4uXQKZHTtk3vdV7EoH_dM/view?usp=drive_link"
        },
        {
            title: "Course on Computer Concepts (CCC)",
            issuer: "NIELIT",
            date: "2021",
            link: "https://drive.google.com/file/d/1wqlGaX_WR5hUHJTBDadeG0wGzPmJtmkO/view?usp=drive_link"
        },
        {
            title: "Advanced Diploma in Computer Applications (ADCA)",
            issuer: "New Shakti college of IT & Management",
            date: "2018",
            link: "https://drive.google.com/file/d/1yevlltZXKKlKe5h_e4DhlyYnY8IkSLmt/view?usp=drive_link"
        },
    ];

    return (
        <section id="achievements" className="py-24 md:py-15 px-6 md:px-12 border-t border-gray-100 dark:border-gray-900 bg-gray-50/20 dark:bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                    <h2 className="text-4xl md:text-6xl font-serif dark:text-white text-navy-text italic">
                        Certifications <br /> <span className="not-italic">& Accolades</span>
                    </h2>
                    <p className="text-[10px] tracking-[0.4em] uppercase opacity-40">Verified Expertise</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {certifications.map((cert, i) => (
                        <div key={i} className="group p-8 border border-gray-100 dark:border-gray-800 bg-white dark:bg-luxury-black hover:border-gold-accent transition-all duration-700 relative overflow-hidden">
                            {/* Decorative Background Icon */}
                            <div className="absolute -right-4 -bottom-4 text-7xl font-serif opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                ★
                            </div>

                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <p className="text-[10px] tracking-widest text-gold-accent font-black mb-4 uppercase">
                                        {cert.date}
                                    </p>
                                    <h3 className="text-xl md:text-2xl font-serif dark:text-gray-200 text-navy-text mb-2 leading-snug">
                                        {cert.title}
                                    </h3>
                                    <p className="text-xs uppercase tracking-widest opacity-50 mb-8">
                                        {cert.issuer}
                                    </p>
                                </div>

                                <a
                                    href={cert.link}
                                    target="_blank"
                                    className="text-[9px] tracking-[0.3em] uppercase font-bold border-b border-gray-200 dark:border-gray-700 group-hover:border-gold-accent transition-all pb-1 inline-block w-fit"
                                >
                                    Verify Credential —→
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Achievements;