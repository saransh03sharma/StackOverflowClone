import React,{useEffect} from 'react'
import {Link, Navigate} from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/magnifying-glass-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import {useSelector, useDispatch} from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser'
import { useNavigate } from 'react-router-dom'
import decode from 'jwt-decode'
import bar from '../../assets/bar.png'

function Navbar() {

  var User = useSelector((state) => (state.currentUserReducer))
  
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  //now we can access User anywhere in the application

  //the auth.js action dispatches data only when loggedin, once reloaded the data is not dispatched again
  //whenever navbar is in app this sideeffect will be run
  useEffect(()=>{
    
    const token = User?.token
    if(token){
      const decodedToken = decode(token)
      //getTime gives axact time at present
      if(decodedToken.exp*1000 < new Date().getTime()){
        handleLogout()
      }
    }
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
   
  },[dispatch, Navigate])

  const handleLogout=()=>{
    dispatch({type:'LOGOUT'});
    Navigate("/")
    dispatch(setCurrentUser(null))
  }


  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="Logo"></img>
        </Link>
        <Link to = '/' className="nav-item nav-btn">About</Link>
        <Link to = '/' className="nav-item nav-btn">Products</Link>
        <Link to = '/' className="nav-item nav-btn">For Teams</Link>
        <form>
            <input type="text" placeholder="Search...." /> 
            {/* No action in form */}
            <img src={search} alt="search" width="18px" className='search-icon'></img>
        </form>
        { User === null ? 
            <Link to="/Auth" className="nav-item nav-links log" >Log in</Link>
        : <>
          <Link to={`/Users/${User?.result?._id}`} style={{color:'white',textDecoration:"none", fontSize:'20px'}}><Avatar backgroundColor='#009dff' px='15px' py='7px' borderRadius='50%' cursor='pointer' color='white' >{User.result['name'].charAt(0)}</Avatar></Link>
          <button className="nav-item nav-links log" onClick={handleLogout}>Log out</button>
          </>
        }

      </div>
    </nav>
  )
}

export default Navbar
