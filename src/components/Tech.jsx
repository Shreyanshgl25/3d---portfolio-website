import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import LazyMount from "./LazyMount";
import { SectionWrapper } from "../hoc";
import { technologies, skillGroups } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills &amp; Tech Stack</h2>
      </motion.div>

      <div className="mt-16 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <LazyMount className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </LazyMount>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            variants={fadeIn("up", "spring", 0.15 * index, 0.7)}
            className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div className="bg-tertiary rounded-[20px] p-6 h-full">
              <h3 className="text-white font-bold text-[18px]">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-[13px] px-3 py-1 rounded-full bg-black-200 text-white-100 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
