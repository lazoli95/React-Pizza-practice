import React from 'react'
import { PizzaList } from '../PizzaList'
import PizzaItem from '../components/PizzaItem'
import '../styles/Menu.css' 
import { motion } from 'framer-motion'

const Menu = () => {
  return (
    <motion.div className='menu'
    
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <div className='menuTitle'>Menu</div>
      <div className="menuList">
        {PizzaList.map((pizza) => {

          return(

            <PizzaItem name={pizza.name} 
                       image={pizza.image} 
                       price={pizza.price} />
          );
        })}
      </div>
    </motion.div>
  )
}

export default Menu