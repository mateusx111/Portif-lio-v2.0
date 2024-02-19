//next image
import Image from "next/image";

//components
import particlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//framer motion
import { motion } from "framer-motion";

//variant
import { fadeIn } from "../variants";
import ParticlesContainer from "../components/ParticlesContainer";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/50 to-black20">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            className="h1"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Transformando Ideias <br /> Em{" "}
            <span className="text-orange-500">Realidade Digital</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl-mb-16"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            quisquam quod, fuga odit earum quidem unde architecto atque vitae
            iure culpa incidunt repellendus accusantium provident rerum labore
            dignissimos tempora velit.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* Image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div
          className="bg-none xl:bg-explosion xl:bg-cover  xl:bg-right xl:bg-no-repeat
          w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar image */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] lg:right-[8%] 
        lg:bottom-0 absolute -bottom-32"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
