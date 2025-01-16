import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div name="about" className=" w-full h-full pt-16 md:pt-32 px-4   text-white ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="">
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className=" text font-jost text-3xl uppercase font-bold inline border-b-4 border-gray-300 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
          >
            About
          </motion.p>
        </div>
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 1,
          }}
          className="text-xl mt-10 "
        >
          Hello there! I’m ELMESTARI Abdelmonim, a MERN Stack Developer based in Sidi Bel Abbes,
          Algeria. As a full stack developer, I specialize in creating dynamic and scalable web
          applications. My work emphasizes clean, efficient, and performance-driven code, with a
          strong focus on "Progressive Enhancement" to ensure great user experiences across various
          browsers and devices.
        </motion.p>
        <br />
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0,
            duration: 1,
          }}
          className="text-xl "
        >
          I’m passionate about constantly exploring new technologies and continuous learning, best
          practices in the development world. I take pride in combining aesthetics with
          functionality and enjoy the process of getting things done effectively. Always open to
          learning new things, I thrive on staying up to date with the latest trends in tech.
        </motion.p>
      </div>
    </div>
  )
}

export default About
