import { Sun, Moon } from 'lucide-react';

function Navbar({ darkMode, setDarkMode }) {
    // Smooth scroll function for better UX
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-8 sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b border-gray-100 dark:border-gray-900">
            {/* Logo / Name */}
            <h1 className="text-xl tracking-[0.4em] font-serif font-bold dark:text-gold-accent text-navy-text mb-4 md:mb-0">
                RIYAJ  <span className="text-gold-accent dark:text-gray-300">
                    AHMAD
                </span>
            </h1>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center text-[10px] uppercase tracking-[0.2em] font-bold">
                <a
                    href="#about"
                    onClick={(e) => scrollToSection(e, "about")}
                    className="hover:text-gold-accent transition-colors duration-300"
                >
                    About
                </a>
                <a
                    href="#skills"
                    onClick={(e) => scrollToSection(e, "skills")}
                    className="hover:text-gold-accent transition-colors duration-300"
                >
                    Skills
                </a>
                <a
                    href="#projects"
                    onClick={(e) => scrollToSection(e, "projects")}
                    className="hover:text-gold-accent transition-colors duration-300"
                >
                    Projects
                </a>
                <a
                    href="#experience"
                    onClick={(e) => scrollToSection(e, "experience")}
                    className="hover:text-gold-accent transition-colors duration-300"
                >
                    Experience
                </a>
                <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "contact")}
                    className="hover:text-gold-accent transition-colors duration-300"
                >
                    Contact
                </a>

                {/* Theme Toggle Button */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="ml-0 md:ml-4 flex items-center gap-2 border border-gray-300 dark:border-gold-accent px-4 py-2 rounded-full transition-all duration-500 hover:bg-gold-accent hover:text-black dark:text-gold-accent text-[9px] tracking-[0.2em] font-black group"
                >
                    {darkMode ? (
                        <>
                            <Sun size={12} className="group-hover:rotate-90 transition-transform duration-500" />
                            <span>LIGHT</span>
                        </>
                    ) : (
                        <>
                            <Moon size={12} className="group-hover:-rotate-12 transition-transform duration-500" />
                            <span>DARK</span>
                        </>
                    )}
                </button>


            </div>
        </nav>
    );
}

export default Navbar;