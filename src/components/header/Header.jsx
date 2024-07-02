import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import "./header.css" 

function Header() {
const user = useSelector(state=>state.user.user)

  return (
    <header className='header'>
      <div className='container'>
        <nav className='nav-bar'>
          <Link to="/" className='header-link'>
          Solutions
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!user &&  <li>
            <Link>Sign In</Link>
            </li>
             }
             {!user && <li>
            <Link>Sign Up</Link>
            </li>}

            {user && <li>
            <Link>Sign Out</Link>
            </li>}
           

          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header