
function Hero() {
    return (
        <section id="hero" className="relative py-10 md:py-25 px-6 md:px-12 overflow-hidden">
            {/* Background Decorative Text (Ghost Typography) */}
            <div className="absolute top-10 left-0 text-[20vw] font-serif opacity-[0.02] dark:opacity-[0.03] select-none pointer-events-none uppercase">
                Design
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">

                {/* Left Side: Content Area */}
                <div className="flex-1 space-y-10 order-2 md:order-1">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-gold-accent opacity-50"></span>
                            <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-sans text-gold-accent font-black">
                                Based in India
                            </p>
                        </div>

                        <h1 className="text-7xl md:text-9xl font-serif tracking-tighter leading-[0.85] dark:text-soft-white text-navy-text">
                            Riyaj <br />
                            <span className="italic font-light ml-4 md:ml-12">Ahmad</span>
                        </h1>
                    </div>

                    <div className="max-w-md border-l-2 border-gold-accent/20 pl-8 py-2">
                        <p className="text-lg md:text-xl font-light leading-relaxed opacity-80 italic font-serif dark:text-gray-300 text-charcoal-navy">
                            "Turning complex logic into elegant visual stories. I build full-stack systems that feel like art."
                        </p>
                    </div>

                    {/* Button Group: Only View Work and Resume */}
                    <div className="flex flex-wrap items-center gap-8 pt-6">

                        {/* Secondary Action - Becomes Primary now */}
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-10 py-5 bg-navy-text dark:bg-gold-accent text-white dark:text-black text-[10px] tracking-[0.3em] uppercase font-bold transition-transform hover:scale-105 relative group overflow-hidden"
                        >
                            <span className="relative z-10">View Case Studies</span>
                            <div className="absolute inset-0 bg-gold-accent dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        </a>

                        {/* Resume Action */}
                        <button
                            onClick={() => window.open('https://drive.google.com/file/d/17jUGaQGEBpckyayJdkhnBvUbxE5rW0HK/view?usp=drive_link', '_blank')}
                            className="px-8 py-4 border border-gray-300 dark:border-gray-800 hover:border-gold-accent transition-all text-[10px] tracking-[0.2em] uppercase opacity-60 hover:opacity-100 flex items-center gap-3 group"
                        >
                            View Resume
                            <span className="text-[8px] bg-gold-accent text-black px-1.5 py-0.5 rounded-sm font-black group-hover:bg-white transition-colors">PDF</span>
                        </button>
                    </div>
                </div>

                {/* Right Side: Editorial Image Layout */}
                <div className="flex-1 order-1 md:order-2 relative w-full flex justify-center">
                    <div className="relative w-full max-w-[400px]">

                        {/* Main Image with Masking & Hover Scale */}
                        <div className="relative z-10 aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group shadow-2xl border-[12px] border-white dark:border-gray-900 bg-gray-100 dark:bg-gray-800">
                            <img src="/riyaj.png"
                                alt="Riyaj Ahmad"
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                            />
                        </div>

                        {/* Decorative Gold Frame */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-gold-accent/30 -z-0"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;