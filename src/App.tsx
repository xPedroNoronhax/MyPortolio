import { useState } from "react";
import styles from "./App.module.css";
import About from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experiences } from "./components/Experiences/Experiences";

import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

import { Projects } from "./components/Projects/Projects";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.App}>
      <Navbar setMenuOpen={setMenuOpen} />
      <Hero menuOpen={menuOpen} />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
