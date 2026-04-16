import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";


function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen bg-editorial-ivory text-navy-text dark:bg-luxury-black dark:text-soft-white transition-colors duration-700">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
          <Footer />

        </div>

        <footer className="py-10 text-center opacity-40 text-[10px] tracking-[0.5em] border-t border-gray-100 dark:border-gray-900">
          © 2026 RIYAJ AHMAD — FULL-STACK DEVELOPER
        </footer>
      </main>
    </div>
  );
}

export default App;