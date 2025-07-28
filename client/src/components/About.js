import { ABOUT_TEXT } from "../constants";
import about from "../assets/about2.png";
import { motion } from "framer-motion";
const About = () => {
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
    <div className=" border-b  border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className=" lg:mx-52 flex flex-wrap lg:gap-x-32">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[38%] lg:p-2"
        >
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center"
          >
            <img className="rounded-full" src={about} alt="" />
          </motion.div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex py-16 justify-center lg:justify-start">
            <p className="my-2 sm:-ml-20 max-w-xl py-6 tracking-tighter">
              {ABOUT_TEXT}{" "}
              <a href="https://www.linkedin.com/in/vishu23/">
                <span className="text-pink-400 hover:cursor-pointer hover:text-purple-400">
                  Let's connect and bring ideas to life!
                </span>
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
