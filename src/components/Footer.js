import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="socialMedia">
        <Facebook /> <Instagram /> <Twitter /> <LinkedIn />
      </div>
      <p>2022 &copy; Frontend/Webdeveloper React Course</p>
    </div>
  )
}

export default Footer