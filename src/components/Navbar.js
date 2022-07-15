import React from 'react'
import Logo from "../assets/pizzaLogo.png"
import { Link } from "react-router-dom"
import ReorderIcon from "@mui/icons-material/Reorder"
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src={Logo} alt="logo" />
      </div>

      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar