
function Projects() {
    const projects = [
        {
            title: "AgriTrade Hub",
            category: "Full-Stack Development",
            desc: "A full-stack web application connecting farmers and buyers for agricultural trading.Built with Java, Spring Boot, MySQL, and responsive frontend technologies.",
            link: "https://agritradehub-jc41.onrender.com",
            tag: "2025",
            image: "src="/agritrade.png"
        },
        {
            title: "Cyber Trace",
            category: "Web Application & Security",
            desc: "A web-based cybersecurity monitoring system for managing and tracking cases.Developed using Java, Spring Boot, REST APIs, and MySQL.",
            link: "https://cybertrace-upuj.onrender.com",
            tag: "2025",
            image: "/cyberTrace.jpg"
        },
        {
            title: "Vinegar-Web",
            category: "E-Commerce Experience",
            desc: "A minimal and user-friendly e-commerce platform showcasing organic vinegar products with a clean design and smooth navigation experience.",
            link: "https://786-riyaj.github.io/Vinegar-Web/",
            tag: "2025",
            image: "/Vinegar-Web.png"
        },
        {
            title: "SimpleWeb Pages",
            category: "Web Experience",
            desc: "A minimal multi-page website with clean design, basic layout, and smooth navigation for an easy user experience.",
            tag: "2025",
            link: "https://786-riyaj.github.io/Web-Pages/",
            image: "/Web-pages.png"
        }
    ];

    return (
        <section id="projects" className="py-24 md:py-25 px-6 md:px-12 bg-gray-50/50 dark:bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-6">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-serif dark:text-white text-navy-text italic leading-tight">
                            Selected <br /> <span className="not-italic block ml-30">   Works</span>
                        </h2>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-2">Projects I have built during my learning <br />and internship experience</p>
                        <p className="text-sm font-serif italic text-gold-accent">2024 — 2026</p>
                    </div>
                </div>

                {/* Projects Grid with Asymmetry */}
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-32">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className={`group cursor-pointer relative ${i % 2 !== 0 ? 'md:mt-32' : ''}`}
                        >
                            {/* Project Image Container */}
                            <div className="relative aspect-[16/10] bg-gray-200 dark:bg-gray-900 mb-8 overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-700 group-hover:border-gold-accent/40 shadow-2xl">

                                {/* Hover Scale Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gold-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

                                <div className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                    // style={{ backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')` }}>
                                    style={{ backgroundImage: `url(${p.image})` }}>
                                </div>


                                {/* Floating Year Tag */}
                                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest bg-white/90 dark:bg-black/90 px-3 py-1 z-20">
                                    {p.tag}
                                </span>
                            </div>

                            {/* Project Info */}
                            <div className="space-y-4 px-2">
                                <p className="text-[10px] uppercase tracking-[0.3em] text-gold-accent font-black">
                                    {p.category}
                                </p>

                                <h3 className="text-3xl md:text-4xl font-serif dark:text-white text-navy-text group-hover:italic transition-all duration-500">
                                    {p.title}
                                </h3>

                                <p className="text-base font-light dark:text-gray-400 text-charcoal-navy leading-relaxed max-w-md opacity-70 group-hover:opacity-100 transition-opacity">
                                    {p.desc}
                                </p>

                                <div className="pt-4 overflow-hidden">
                                    <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] uppercase tracking-[0.3em] font-bold relative flex items-center group"
                                    >
                                        <span className="mr-2">View Project Details</span>
                                        <span className="w-8 h-[1px] bg-gold-accent group-hover:w-16 transition-all duration-500"></span>
                                        <span className="ml-2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA for Github */}
                <div className="mt-10 text-center border-t border-gray-100 dark:border-gray-900 pt-20">
                    <p className="text-sm font-light opacity-50 mb-6 uppercase tracking-widest">Want to see more code?</p>
                    <a href="https://github.com/786-Riyaj" target="_blank" className="text-2xl md:text-3xl font-serif italic hover:text-gold-accent transition-colors">
                        Explore Github Repository —→
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
