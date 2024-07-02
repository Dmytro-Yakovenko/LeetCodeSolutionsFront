import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='footer-wrapper'>
            <Link to= "/">
            Solutions
            </Link>
            <p> © 2024. An interactive learning project from.  Hosted by  </p>

            <a href="https://dmytro-yakovenko.github.io/portfolio/#/" target='blank'> Dmytro Yakovenko</a>

            </div>
          

        </div>
    </footer>
  )
}

export default Footer