import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { profile } from "../constants";
import Icon from "./Icons";

// Cycles through `words` with a typing / deleting effect
const useTypewriter = (words, typeSpeed = 80, deleteSpeed = 40, pause = 1600) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timer;

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timer = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
};

const Hero = () => {
  const role = useTypewriter(profile.roles);

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* pointer-events-none so the 3D scene underneath stays draggable */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        <div className="flex flex-col items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <br />{" "}
            <span className="text-[#915eff]">{profile.name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 min-h-[1.6em]`}>
            {role}
            <span className="typing-cursor text-[#915eff]">|</span>
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 pointer-events-auto">
            <a
              href="#work"
              className="px-6 py-3 rounded-xl bg-[#915eff] text-white font-bold shadow-md shadow-primary hover:brightness-110 transition"
            >
              View my work
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:border-[#915eff] hover:bg-white/5 transition"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl text-secondary font-semibold hover:text-white transition"
            >
              Contact me
            </a>
          </div>

          <div className="mt-5 flex gap-3 pointer-events-auto">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-secondary hover:text-white transition-colors"
            >
              <Icon name="github" className="w-6 h-6" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-secondary hover:text-white transition-colors"
            >
              <Icon name="linkedin" className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-secondary hover:text-white transition-colors"
            >
              <Icon name="mail" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-2 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
