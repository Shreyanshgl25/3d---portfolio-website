import { motion } from "framer-motion";

import { styles } from "../styles";
import { education, achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic background</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div variants={fadeIn("right", "spring", 0.1, 0.75)}>
          {education.map((item) => (
            <div
              key={item.school}
              className="bg-tertiary rounded-2xl p-7 border border-white/5"
            >
              <h3 className="text-white text-[22px] font-bold">{item.school}</h3>
              <p className="text-secondary text-[15px] mt-1">{item.degree}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-[14px]">
                <span className="px-3 py-1 rounded-full bg-[#915eff]/15 text-[#c9b3ff] border border-[#915eff]/30">
                  {item.date}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#00cea8]/15 text-[#5eead4] border border-[#00cea8]/30">
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="bg-tertiary rounded-2xl p-7 border border-white/5"
        >
          <h3 className="text-white text-[18px] font-bold mb-4">Achievements</h3>
          <ul className="space-y-3">
            {achievements.map((point, index) => (
              <li key={index} className="flex gap-3 text-white-100 text-[14px] leading-[24px]">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#915eff] shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
