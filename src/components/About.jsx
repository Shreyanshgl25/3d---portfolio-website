import { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { animate, motion, useInView } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { services, stats, profile } from "../constants/index";
import { profilePhoto } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const Counter = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.5,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full" options={{ max: 45, scale: 1, speed: 450 }}>
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="mt-4 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <motion.div
          variants={fadeIn("", "tween", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px] space-y-4 order-2 lg:order-1"
        >
          <p>
            Hi, I'm {profile.name}, an AI Engineer working across GenAI, agentic AI, and
            Retrieval-Augmented Generation. I build LLM-powered systems — from conversational
            chatbots and voice agents to CCTV-based computer vision pipelines — and deploy them
            across Microsoft Azure and Google Cloud Platform.
          </p>
          <p>
            I also have a strong Full-Stack (MERN) background, so I'm comfortable owning a
            project end to end: designing the retrieval pipeline, wiring up the model or agent
            logic, and shipping a production-ready interface around it. I enjoy turning ambitious
            AI ideas into working, reliable products. Let's collaborate and build something
            extraordinary!
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.9)}
          className="order-1 lg:order-2 shrink-0"
        >
          <div className="relative w-[190px] h-[190px] sm:w-[220px] sm:h-[220px]">
            <div className="absolute inset-0 rounded-full green-pink-gradient p-[3px]">
              <div className="w-full h-full rounded-full bg-primary p-[6px]">
                <img
                  src={profilePhoto}
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.8)}
        className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-tertiary rounded-2xl px-6 py-5 border border-white/5"
          >
            <p className="text-white text-[32px] font-black leading-tight">
              {stat.text ? stat.text : <Counter to={stat.value} suffix={stat.suffix} />}
            </p>
            <p className="text-secondary text-[13px] mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
