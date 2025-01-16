import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { FiArrowRight } from 'react-icons/fi'

export const HoverImageLinks = ({ project }) => {
  const reversedProject = [...project].reverse()
  return (
    <section className="p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        {reversedProject.map((item, id) => (
          <Link
            key={id}
            heading={item.title}
            subheading={item.desc}
            imgSrc={item.img}
            href={item.lnk}
          />
        ))}
      </div>
    </section>
  )
}

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%'])
  const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%'])

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    x.set(mouseX / rect.width - 0.5)
    y.set(mouseY / rect.height - 0.5)
  }

  return (
    <motion.a
      href={href}
      ref={ref}
      target="_blank"
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center font-jost justify-between border-b-2 border-neutral-500 py-4 hover:border-white md:py-8"
    >
      {/* Text content */}
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          className="block text-xl font-bold text-neutral-300 transition-colors duration-500 group-hover:text-white md:text-2xl"
        >
          {heading}
        </motion.span>
        <span className="mt-2 block text-base text-neutral-300 group-hover:text-white">
          {subheading}
        </span>
      </div>

      {/* Image and Arrow Animation */}
      <motion.div
        style={{
          top,
          left,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={{
          initial: { opacity: 0, scale: 0.8, y: 20 },
          whileHover: { opacity: 1, scale: 1.3, y: 0 }, // Increased scale to 1.3 for a larger effect
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="absolute flex items-center justify-center h-32 w-32 rounded-lg"
      >
        <motion.img
          src={imgSrc}
          className="h-32 w-32 object-cover rounded-lg" // Increased size of the logo
          alt={heading}
        />
      </motion.div>

      {/* Arrow Animation */}
      <motion.div
        variants={{
          initial: { opacity: 0, x: -20 },
          whileHover: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
        className="absolute right-4 text-3xl text-white" // Positioned arrow at the extreme right of the project div
      >
        <FiArrowRight />
      </motion.div>
    </motion.a>
  )
}
