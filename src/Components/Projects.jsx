import React from 'react'
import { motion } from 'framer-motion'

import p1 from '../assets/projects/p1.png'
import p2 from '../assets/projects/p2.png'
import { HoverImageLinks } from './projectDetails'

export default function Projects() {
  const project = [
    {
      id: 1,
      img: p1,
      lnk: 'https://ecomsphere.onrender.com/',
      title: 'EcomSphere',
      desc: 'MERN, Redis, Stripe, JWT, Admin Dashboard, Inventory Control',
    },
    {
      id: 2,
      img: p2,
      lnk: 'https://pingme-ip2l.onrender.com/',
      title: 'PingMe',
      desc: 'MERN, JWT, Socket.io, Zustand, TailwindCSS, Daisy UI',
    },
  ]

  return (
    <div name="projects" className="w-full h-full pt-16 md:pt-32 px-4 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text text-3xl uppercase font-jost font-bold inline border-b-4 border-gray-300 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
          >
            Projects
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="hidden lg:block"
        >
          <HoverImageLinks project={project} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl grid md:grid-cols-2 lg:hidden gap-8 grid-cols-1 mt-10"
        >
          {project.map((item, id) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="card w-auto shadow-md group duration-700 shadow-blue-900 hover:shadow-2xl"
            >
              <figure>
                <img src={item.img} alt={item.title} className="rounded-lg" />
              </figure>
              <div className="card-body shadow-xl text-center">
                <h2 className="card-title justify-center group-hover:text-white duration-700 font-jost">
                  {item.title}
                </h2>
                <p className="text-sm group-hover:text-white duration-700">{item.desc}</p>
                <div className="card-actions justify-center mt-8">
                  <a
                    href={item.lnk}
                    target="_blank"
                    rel="noreferrer"
                    className="btn group-hover:scale-125 hover:text-white duration-300 btn-circle"
                  >
                    View Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
