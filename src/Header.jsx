import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="header">
     <Link to="/"> <h3>Home</h3></Link>
      <Link to="/Write"><h3>Write</h3></Link>
      <Link to="/About"><h3>About</h3></Link>
    </div>
  )
}

export default Header
