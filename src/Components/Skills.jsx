import React from 'react'
import html from '../assets/skills/html.png'
import js from '../assets/skills/javascript.png'
import java from '../assets/skills/java.png'
import php from '../assets/skills/php.png'
import python from '../assets/skills/python.png'
import R from '../assets/skills/R.png'
import css from '../assets/skills/css.png'
import react from '../assets/skills/react.png'
import angular from '../assets/skills/angular.png'
import bs from '../assets/skills/bootstrap.png'
import gh from '../assets/skills/github.png'
import docker from '../assets/skills/docker.png'
import tc from '../assets/skills/tailwindcss.png'
import mongo from '../assets/skills/mongodb.png'
import mysql from '../assets/skills/mysql.png'
import postgres from '../assets/skills/postgresql.png'
import redis from '../assets/skills/redis.png'
import nodejs from '../assets/skills/nodejs.png'
import springboot from '../assets/skills/springboot.png'
import laravel from '../assets/skills/laravel.png'
import sql from '../assets/skills/sql.png'
import { motion, spring } from 'framer-motion'
const Skills = () => {
  const techs = [
    // Frontend Technologies
    {
      id: 1,
      src: html,
      title: 'HTML',
      invert: false,
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      invert: false,
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: js,
      title: 'JavaScript',
      invert: false,
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: react,
      title: 'ReactJS',
      invert: false,
      style: 'shadow-blue-600',
    },
    {
      id: 6,
      src: tc,
      title: 'Tailwind',
      invert: false,
      style: 'shadow-sky-400',
    },
    {
      id: 19,
      src: bs,
      title: 'BootStrap',
      invert: false,
      style: 'shadow-purple-500',
    },
    {
      id: 18,
      src: angular,
      title: 'AngularJS',
      invert: false,
      style: 'shadow-red-600',
    },

    // Backend Technologies
    {
      id: 5,
      src: nodejs,
      title: 'NodeJs',
      invert: false,
      style: 'shadow-green-500',
    },
    {
      id: 14,
      src: springboot,
      title: 'SpringBoot',
      invert: false,
      style: 'shadow-emerald-800',
    },
    {
      id: 16,
      src: laravel,
      title: 'Laravel',
      invert: false,
      style: 'shadow-red-500',
    },
    {
      id: 12,
      src: mysql,
      title: 'MySql',
      invert: false,
      style: 'shadow-orange-400',
    },
    {
      id: 15,
      src: postgres,
      title: 'PostgreSQL',
      invert: false,
      style: 'shadow-blue-400',
    },
    {
      id: 20,
      src: redis,
      title: 'Redis',
      invert: false,
      style: 'shadow-red-500',
    },
    {
      id: 7,
      src: mongo,
      title: 'MongoDB',
      invert: false,
      style: 'shadow-emerald-800',
    },
    {
      id: 9,
      src: docker,
      title: 'Docker',
      invert: false,
      style: 'shadow-blue-400',
    },

    // Programming Languages
    {
      id: 10,
      src: python,
      title: 'Python',
      invert: false,
      style: 'shadow-yellow-400',
    },
    {
      id: 13,
      src: java,
      title: 'JAVA',
      invert: false,
      style: 'shadow-blue-600',
    },
    {
      id: 8,
      src: sql,
      title: 'SQL',
      invert: false,
      style: 'shadow-[#194180]',
    },
    {
      id: 21,
      src: R,
      title: 'R language',
      invert: false,
      style: 'shadow-blue-400',
    },

    // Tools
    {
      id: 11,
      src: gh,
      title: 'GitHub',
      invert: false,
      style: 'shadow-gray-400',
    },
  ]
  return (
    <div name="skills" className=" px-8   w-full h-full ">
      <div className=" max-w-screen-lg  pt-16 md:pt-32 mx-auto  flex flex-col justify-center h-full w-full  text-white ">
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
            className="text-3xl uppercase font-bold border-b-4 border-gray-300 p-2  inline bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
          >
            My Skills
          </motion.p>
        </div>
        <div className=" w-full grid grid-cols-2 md:grid-cols-3 mt-10  gap-6 text-center  py-4 px-6 sm:px-0    ">
          {techs.map(({ id, src, title, style, invert }) => (
            <div
              key={id}
              className={` shadow-md hover:scale-105 duration-500 py-2 flex flex-col  justify-between items-center  rounded-lg ${style}`}
            >
              <img
                src={src}
                alt="Logo"
                className={`w-1/2 h-20 aspect-square  mb-4 object-contain filter ${invert ? 'invert' : ''}`}
              />
              <p className="">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
