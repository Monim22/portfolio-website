import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from 'framer-motion'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const errors = validateForm()

    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((errorMessage) => {
        toast.error(errorMessage, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        toast.success('Message sent successfully! Check your email for confirmation.', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
        setName('')
        setEmail('')
        setMessage('')
      } else {
        const error = await response.json()
        throw new Error(error.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('Failed to send message. Please try again later.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Your existing validation functions remain the same
  const validateForm = () => {
    const errors = {}

    if (name.trim() === '') {
      errors.name = 'Name is required'
    }

    if (email.trim() === '') {
      errors.email = 'Email is required'
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email address'
    }

    if (message.trim() === '') {
      errors.message = 'Message is required'
    }

    return errors
  }

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  return (
    <div name="contact" className="w-full px-8 h-full py-16 md:py-32 text-white">
      <ToastContainer />
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-jost font-bold inline border-b-4 border-gray-300 uppercase bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
          >
            Contact
          </motion.p>
          <p className="pt-8">Submit the form below to get in touch with me.</p>
        </div>
        <div className="flex flex-col items-center">
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500"
              disabled={isSubmitting}
            />

            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500"
              disabled={isSubmitting}
            />

            <textarea
              placeholder="Enter Your Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500"
              disabled={isSubmitting}
            ></textarea>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 disabled:opacity-50 disabled:hover:scale-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : "Let's Talk"}
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
