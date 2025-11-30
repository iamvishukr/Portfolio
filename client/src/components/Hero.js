import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilepic1.png";
import { motion } from "framer-motion";
import { useSpring } from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 lg:ml-52">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start ">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl "
            >
              Vishal Kumar Singh
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0 }}
              className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Front-End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter "
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8 ">
          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="flex justify-center  "
          >
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-full"
              src={profilePic}
              alt="Vishal Kumar"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
