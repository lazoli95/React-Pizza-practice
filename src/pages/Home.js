import React from 'react';
import HeroImage from '../assets/pizza.jpeg';
import { Link } from 'react-router-dom';
import "../styles/Home.css"
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div className='home' style={{backgroundImage: `url(${HeroImage})`}}
    
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: {duration: 0.5} }}    
    >

        <div className="homeContainer">
            <h1>React Pizza</h1>
            <p>Favourite pizzas of WebDevelopers!</p>

            <Link to="/menu">
                <button>Order Pizza</button>
            </Link>
        </div>
    </motion.div>
  )
}

export default Home