

function Footer() {
    return (
        <footer className="py-10 px-6 md:px-12 border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

                {/* Branding */}
                <div className="text-center md:text-left">
                    <h1 className="text-xl tracking-[0.4em] font-serif font-bold dark:text-gold-accent text-navy-text mb-4 md:mb-0">
                        RIYAJ  <span className="text-gold-accent dark:text-gray-300">
                            AHMAD
                        </span>
                    </h1>
                    <p className="text-[9px] tracking-[0.5em] uppercase opacity-40">Full-Stack Developer</p>
                </div>

                {/* Social Links (Bina library ke chalne wala code) */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] tracking-[0.3em] uppercase font-bold">
                    <a
                        href="https://www.linkedin.com/in/riyaj-ahmad-6b850525a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-gold-accent transition-all duration-300 group"
                    >
                        {/* LinkedIn SVG */}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/786-Riyaj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-gold-accent transition-all duration-300 group"
                    >
                        {/* GitHub SVG */}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        <span>GitHub</span>
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-gold-accent transition-all duration-300 group"
                    >
                        {/* Twitter/X SVG */}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        <span>Twitter</span>
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-[9px] tracking-widest uppercase opacity-30 text-center md:text-right">
                    © 2026 All Rights Reserved <br />
                    Designed for the web by Riyaj Ahmad
                </div>
            </div>
        </footer>
    );
}

export default Footer;