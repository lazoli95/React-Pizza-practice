import React from 'react'
import contactBackground from "../assets/pizzaLeft.jpg"
import "../styles/Contact.css"
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div className='contact'
    
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <div className="contact-left" style={{backgroundImage: `url(${contactBackground})`}}></div>

      <div className="contact-right">
        <h1>Contact</h1>

        <form action="" method='post'>
          <label>Name</label>
          <input type="text" placeholder='Give your full name here...'/>

          <label>E-mail</label>
          <input type="email" placeholder='Give your e-mail here...'/>

          <label>Message</label>
          <textarea rows="6" placeholder='Message...'></textarea>

          <button>Send Message</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact