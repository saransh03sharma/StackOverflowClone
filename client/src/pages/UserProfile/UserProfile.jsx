import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { useParams } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import { useSelector } from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBirthdayCake, faPen} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import { useState } from 'react'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UserProfile.css'
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from '../../actions/question';
import { fetchAllUsers } from '../../actions/users';
import { useEffect } from 'react';
import bar from '../../assets/bar.png'

const UserProfile = () => {
    
    const users = useSelector((state)=>state.usersReducer)
    
    const{id} = useParams()
    const currentProfile = users.filter(user => user._id ===id)[0]
    const currentUser = useSelector((state)=>state.currentUserReducer)
    const [Switch,setSwitch] = useState(false)
    console.log(users)

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(fetchAllUsers())
      dispatch(fetchAllQuestions())  
  
    },[dispatch])
  
    const [num, setnum] = useState(1)
    const [bar1, setbar1] = useState("bar1")
    const [home, sethome] = useState("home-container-21")
    const [style, setstyle] = useState("c1")
  
    
useEffect(() => {
  function handleResize() {
    if(window.innerWidth >800){
      setnum(1);
      setstyle("c1");
      sethome("home-container-21")
    }
  }

  // Attach the event listener to the window object
  window.addEventListener('resize', handleResize);

  // Remove the event listener when the component unmounts
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

    const handleClick = (e) => {
      if(num%2 === 1){
        setbar1("bar2");
        setstyle("c2");
        sethome("home-container-22");
      }
      else{
        setbar1("bar1");
        setstyle("c1");
        sethome("home-container-22");
      }
      setnum(num+1);  
    }
    return (
      <div className="home-container-1">
        <div className={style}>
        <LeftSidebar />
        </div>
        <img src={bar} className={bar1} alt='bar' width="40px" height="40px" onClick={handleClick}></img>
        <div className={home} >
        <section>
            <div className='user-details-container'>
                <div className='user-details'>
                    {/* px is padding on left and right */}
                    <Avatar  backgroundColor='purple' color="white" fontSize="50px" px="40px" py="30px">{currentProfile?.name.charAt(0).toUpperCase()}</Avatar>
                    <div className="user-name">
                        {currentProfile?.name}
                        <p><FontAwesomeIcon icon={faBirthdayCake}/> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                    </div>

                </div>
                {
                    currentUser?.result._id === id && (
                    <button type='button' onClick={()=>setSwitch(true)} className='edit-profile-btn'> 
                    <FontAwesomeIcon icon={faPen} /> Edit Profile</button>)
                }
            </div>
            <>
                {
                    Switch ? <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                    :<ProfileBio currentProfile={currentProfile}/>
                }
            </>
        </section>
      </div>
    </div>
  )
}

export default UserProfile


//rafce