//framer motion
import { motion } from "framer-motion";

//variant
const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animated: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};
const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2E2267]"
        variants={transitionVariants}
        initial="initial"
        animate="animated"
        exit="exit"
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]"
        variants={transitionVariants}
        initial="initial"
        animate="animated"
        exit="exit"
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]"
        variants={transitionVariants}
        initial="initial"
        animate="animated"
        exit="exit"
        transition={{
          duration: 0.6,
          delay: 0.6,
          ease: "easeInOut",
        }}
      ></motion.div>
    </>
  );
};

export default Transition;
