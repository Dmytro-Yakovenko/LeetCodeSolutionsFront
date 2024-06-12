import React from 'react'
import "./banner.css"
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <div className='banner'>
    <div className='container'>
        <h1>solutions</h1>
        <p>A place to learn and practice LeetCode.</p>
        <Link to="/">www.leetcodesolutions</Link>
    </div>
    </div>
   
  )
}

export default Banner