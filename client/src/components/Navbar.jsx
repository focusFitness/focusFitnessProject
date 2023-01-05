import React from 'react'
import Logo from '../img/placeholder.jpg'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
            <img src = {Logo} alt=""/>
            </div>
            <div className='links'>
            <Link className='link' to="/link1">
                <h6>Link1</h6>
            </Link>
            <Link className='link' to="/link2">
                <h6>Link2</h6>
            </Link>
            <Link className='link' to="/link3">
                <h6>Link3</h6>
            </Link>
            <Link className='link' to="/link4">
                <h6>Link4</h6>
            </Link>
            <Link className='link' to="/link5">
                <h6>Link5</h6>
            </Link>
            <span>John</span>
            <span>Logout</span>
            <span className='write'>
                <Link className='link' to="/write">
                    Write
                </Link>
            </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar