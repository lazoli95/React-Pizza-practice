import React from 'react'
import AboutBackground from "../assets/multiplePizzas.jpeg"
import "../styles/About.css"
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div className='about'

    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >

      <div className="aboutTop" style={{backgroundImage: `url(${AboutBackground})`}}></div>
      <div className="aboutContainer">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus beatae ipsam dolor ea optio nam. Mollitia adipisci fugit, quaerat laudantium eveniet accusamus consequatur tempore dolores fugiat doloremque voluptatibus necessitatibus quae. Unde porro blanditiis, commodi assumenda laudantium neque corrupti, reprehenderit iste dolorum vero quaerat repellat est aut itaque expedita officiis. Ea autem repudiandae repellat nulla accusantium minima odio consequuntur repellendus mollitia explicabo sequi harum itaque in ab facere fuga maxime, aperiam quasi distinctio modi quos esse nisi. Explicabo nisi laboriosam ratione fugit omnis eius rem, nulla pariatur tempora magni quod ipsum voluptatum aspernatur tempore impedit natus sapiente. Esse, itaque! Fugit, architecto!</p>
      </div>
      
    </motion.div>
  )
}

export default About