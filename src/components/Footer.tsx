"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { IconContext } from "react-icons";
import { FaAngleDoubleDown, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  return (
    <div ref={container}>
      <Logos scrollProgress={scrollYProgress} />
    </div>
  );
};

interface LogosProps {
  scrollProgress: any;
}

const Logos: React.FC<LogosProps> = ({ scrollProgress }) => {
  const y = useTransform(scrollProgress, [0, 1], [-225, 0]);
  return (
    <div>
      <h1 className="flex justify-center md:text-xl text-neutral-900 font-semibold pb-2">Contact me below
      <span className="px-4 flex items-center">
        <FaAngleDoubleDown />
      </span>
      </h1>
      <div
        className="h-[250px] bg-neutral-800 overflow-hidden"
        id="contact-section"
      >
        <motion.div
          style={{ y }}
          className="h-full bg-neutral-800 flex justify-center gap-10 items-center p-10"
        >
          <IconContext.Provider value={{ size: "40px", color: "white" }}>
            <div className="flex gap-20 md:gap-40">
              <a href="https://github.com/rezzadtyp" target="_blank">
                <FaGithub />
              </a>
              <a href="https://instagram.com/rezaptrk" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com/in/rezzadtyp" target="_blank">
                <FaLinkedin />
              </a>
            </div>
          </IconContext.Provider>

          {/* <p className=" text-white text-7xl font-semibold">
          Let's work together
        </p> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
