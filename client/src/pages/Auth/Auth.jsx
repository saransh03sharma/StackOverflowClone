import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth  from './AboutAuth'
import {signup, login} from '../../actions/auth' 

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false)

  //to store name email password entered
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSwitch = () =>{
    setIsSignup(!isSignup)
  }

  const handleSubmit=(e) =>{
    e.preventDefault() //the website now doesn;t reload upon clicking empty form
    if(!password && !email){
      alert("Enter email and password to continue")
    }
    
    if(isSignup){
      if(!name){
        alert("enter a name to continue")
      }
      //dispatch the functions
      dispatch(signup({name,email,password},navigate))
    }
    else{
      //console.log("login")
      dispatch(login({email,password},navigate))
    }
  }
  //onsumbit, onclick like event handlers will have e i.e. event as parameter
  return (
    <div>
      
      <section className="auth-section">
        { isSignup && <AboutAuth />}
        <div className='auth-container-2'>
          { !isSignup && <img src={icon} alt="Stack Overflow" className="login-logo" />}
          <form onSubmit={handleSubmit}>
            { 
              isSignup && 
              (
                <label htmlFor="name"> 
                <h4>Display name</h4>
                {/* If there is a change in input catch that event and set the name */}
                <input type="text" name="name" id='name' onChange={(e)=>{setName(e.target.value)}}></input>
                </label>
              )
            
            }

            <label htmlFor="email"> 
              <h4>Email</h4>
              <input type="email" name="email" id='email' onChange={(e)=>{setEmail(e.target.value)}}></input>
            </label>
            
            <label htmlFor="password">
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <h4>Password</h4>
              { !isSignup && <p style={{color: "#007ac6", fontSize:"13px"}}>forget password</p>}
              </div> 
              <input type="password" name="password" id='password' onChange={(e)=>{setPassword(e.target.value)}}></input>
            
            { isSignup && 
              <p style={{color: "#666767",fontSize:"13px"}}> Passwords must contain at least eight<br />characters, including at least 1 letter and 1<br /> number.</p> 
            }
            
            </label>
            {
              isSignup && (
              <label htmlFor="check">
              <input type='checkbox' name='check id='check />
              <p style={{fontSize:"13px"}}> Opt-in to receive occasional,<br />product updates, user research invitations,<br />company announcements, and digests.</p>
              </label>
              )
            }
            <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up' : 'Log in'}</button>
          {/* htmlFor would link to id */}

            { isSignup && 
            <p style={{ color: "#666767", fontSize:"13px"}}>
              By clicking "Sign up", you agree to our 
              <span style={{ color: "#007ac6"}}> terms of<br /> service</span>,
              <span style={{ color: "#007ac6"}}> privacy policy</span> and 
              <span style={{ color: "#007ac6"}}> cookie policy</span>
              </p>
            }
          </form>
          <p>
              {isSignup ? 'Already have an account?' : 'Don\'t have an account?'}
              <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Log in" : "Sign up" }</button>
            </p>
        </div>
      </section>
      
    </div>
  )
}

export default Auth
