import React from 'react'
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import About from '../pages/About';
import Contact from '../pages/Contact';
import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = () => {

    const location = useLocation();

    return (

        <AnimatePresence>
            <Routes location={location}>
                <Route path='/' element={<Home />}>Home</Route>
                <Route path='/menu' element={<Menu />}>Menu</Route>
                <Route path='/about' element={<About />}>About</Route>
                <Route path='/contact' element={<Contact />}>Contact</Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes