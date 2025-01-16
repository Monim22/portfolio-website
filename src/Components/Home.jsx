import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  // Local PDF path
  const pdfPath = '/ELMESTARI_Abdelmonim.pdf'

  const handleResumeClick = () => {
    window.location.href = '/ELMESTARI_Abdelmonim.pdf'
  }

  const handleDownload = (e) => {
    e.preventDefault()
    // Create download link
    const link = document.createElement('a')
    link.href = pdfPath
    link.download = 'ELMESTARI_Abdelmonim.pdf' // This will be the suggested filename when downloading
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div name="home" className="h-full w-full">
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 lg:pt-0 items-center h-full px-8 md:px-4 grid-cols-1">
        <motion.div
          initial={{
            x: -50,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            delay: 0.2,
            type: 'spring',
            stiffness: 100,
            damping: 50,
          }}
          className="flex flex-col lg:order-first order-last mt-16 md:mx-0"
        >
          <motion.h2
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className="text-3xl font-jost sm:text-6xl text-white font-bold"
          >
            Hi, I am <span className="text-emerald-800">Monim</span> <br />
            <span className="text-5xl bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {' '}
              <Typewriter
                words={['Full-Stack developer', 'Innovative Crafter']}
                loop={false}
                cursor
                cursorColor="#06b6d4"
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </span>
          </motion.h2>
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
            className="text-gray-400 py-8 text-xl max-w-md"
          >
            I thrive on building innovative websites that merge aesthetics with functionality. My
            approach combines creativity and technical expertise to provide you with solutions that
            elevate your brand. Whether you're seeking to enhance your online presence or launch a
            new project, I'm committed to delivering exceptional results that leave a lasting
            impression.
          </motion.p>
          <div className="flex gap-4 mt-4">
            <Link
              to="skills"
              smooth
              duration={500}
              className="group hover:scale-110 duration-300 text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer"
            >
              My Skills
              <MdOutlineKeyboardArrowDown size={25} className="ml-1" />
            </Link>
            <div className="relative group">
              <button
                onClick={handleResumeClick}
                className="group hover:scale-110 duration-300 text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer"
              >
                Resume
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block mt-2 bg-gray-800 rounded-md p-2 shadow-lg z-50">
                <button
                  onClick={handleDownload}
                  className="text-white hover:text-blue-400 text-sm px-4 py-2 whitespace-nowrap"
                >
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: 50,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            delay: 0.2,
            type: 'spring',
            stiffness: 100,
            damping: 50,
          }}
          className="md:pt-32 pt-16"
        >
          <img
            src="../assets/mainIconsdark.svg"
            alt="My Pic"
            className="rounded-2xl mt-8 lg:mt-0 md:mx-auto md:w-full"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
