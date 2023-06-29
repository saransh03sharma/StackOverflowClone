import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/Globe.svg'
import {Link} from 'react-router-dom'

const LeftSidebar = () => {


  return (
      
    <div className="Left-sidebar">
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-link' activeClassName='active'><p>Home</p></NavLink>
        <div className='side-nav-div'>
          <div>
            <p> Public </p>
          </div>
          <NavLink to = '/otp' className="side-nav-link" style={{marginTop:"20px"}}><p>OTP</p></NavLink>
          
          <NavLink to = '/about' className="side-nav-link-1" style={{marginTop:"20px"}}>About</NavLink>
          <NavLink to = '/Product' className="side-nav-link-1">Products</NavLink>
          <NavLink to='/Questions' className='side-nav-link' activeClassName='active'>
            {/* Active class would be the link whose url exactly matches
            browser url */}     
            <img src={Globe} alt="Globe" ></img>
            <p style={{paddingLeft:"10px"}}>Questions</p>
          </NavLink>
          <NavLink to='/Tags' className='side-nav-link' activeClassName='active' style={{paddingLeft:"40px"}}>
            <p>Tags</p>
          </NavLink>
          <NavLink to='/Users' className='side-nav-link' activeClassName='active' style={{paddingLeft:"40px"}}>
            <p>Users</p>
          </NavLink>
          
        </div>
      </nav>
    </div>
    )
}

export default LeftSidebar
