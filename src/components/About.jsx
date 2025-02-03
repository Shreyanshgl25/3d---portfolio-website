import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  console.log(title);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-cneter">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        varients={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I'm Shreyansh Goyal, a Data Science and Machine Learning enthusiast, as well as a skilled Full-Stack Web Developer. I specialize in developing intelligent, data-driven solutions that transform raw information into meaningful insights. Whether it's building predictive models, automating processes, or implementing AI-powered applications, I thrive on leveraging data to drive innovation.

In addition to my expertise in ML, I craft dynamic and scalable web applications, ensuring seamless integration between intelligent systems and user-friendly interfaces. With a passion for problem-solving and an eye for detail, I love turning complex challenges into impactful digital experiences. Let’s collaborate and create something extraordinary!


      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
