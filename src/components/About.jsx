import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
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
      <motion.div className={`${styles.paddingX}`}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
      My name is Pradeep, and I have 5 years of experience in frontend development. I specialize in HTML, CSS, JavaScript, and modern frameworks like Tailwind CSS, React.js, and Next.js, with a basic understanding of Node.js. I’ve built scalable, responsive, and user-friendly web applications. <br/><br/>

In my previous role, I collaborated closely with designers, backend developers, and product managers to deliver seamless user experiences. I’m skilled in performance optimization, API integration, and applying best practices in frontend development.<br/><br/>

I enjoy solving complex UI challenges and am a quick learner who adapts easily to new technologies.
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
