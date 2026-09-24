import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Icon from "./Icons";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 origin-left z-50 bg-gradient-to-r from-[#00cea8] to-[#bf61ff]"
    />
  );
};

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center text-white black-gradient border border-[#915eff]/40 shadow-lg transition-all duration-300 hover:border-[#915eff] hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"
      }`}
    >
      <Icon name="arrowUp" />
    </button>
  );
};
