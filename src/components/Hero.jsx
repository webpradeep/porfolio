import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FF6E00]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#FF6E00]"> Pradeep</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 mb-2`}>
            I am an independent, self-motivated individual dedicated to achieving my goals through hard work and determination.
          </p>
          <a
            href="/CV_PradeepYadav_FrontendDeveloper.pdf"
            attributes-list
            download="/CV_PradeepYadav_FrontendDeveloper.pdf"
            className="relative z-[3] black-gradient uppercase inline-block mt-3 cursor-pointer rounded-lg px-6 py-2 text-white text-[18px] font-uppercase"
          >
            Download Resume
          </a>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10  bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
