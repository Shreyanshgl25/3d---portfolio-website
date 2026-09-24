import { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, profile } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import Icon from "./Icons";

const ProjectCard = ({
  index,
  name,
  description,
  highlight,
  category,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Tilt
        options={{ max: 25, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />

          <span className="absolute left-3 top-3 text-[11px] font-semibold px-3 py-1 rounded-full bg-black/60 backdrop-blur text-white">
            {category}
          </span>

          <div className="absolute inset-0 flex justify-end m-3 gap-2 card-img_hover pointer-events-none">
            {live_link && (
              <a
                href={live_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} live demo`}
                className="pointer-events-auto black-gradient w-10 h-10 rounded-full flex justify-center items-center text-white"
              >
                <Icon name="external" className="w-5 h-5" />
              </a>
            )}
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} source code`}
              className="pointer-events-auto black-gradient w-10 h-10 rounded-full flex justify-center items-center"
            >
              <img src={github} alt="" className="w-1/2 h-1/2 object-contain" />
            </a>
          </div>
        </div>

        <div className="mt-5">
          {highlight && (
            <p className="inline-block mb-2 text-[12px] font-semibold px-3 py-1 rounded-full bg-[#00cea8]/15 text-[#5eead4] border border-[#00cea8]/30">
              {highlight}
            </p>
          )}
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="mt-5 flex gap-4 text-[14px] font-semibold">
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#915eff] hover:text-white transition-colors"
          >
            Source code &rarr;
          </a>
          {live_link && (
            <a
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#915eff] hover:text-white transition-colors"
            >
              Live demo &rarr;
            </a>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const [filter, setFilter] = useState("All");

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        A selection of things I've built, from full-stack platforms to polished front-ends. Each
        card links to the source code.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-[14px] font-semibold transition-colors ${
              filter === cat
                ? "bg-[#915eff] text-white"
                : "bg-tertiary text-secondary hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-7">
        {visible.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>

      <div className="mt-12">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-semibold border border-white/20 rounded-xl px-5 py-3 hover:border-[#915eff] transition-colors"
        >
          <Icon name="github" /> See more on GitHub
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
