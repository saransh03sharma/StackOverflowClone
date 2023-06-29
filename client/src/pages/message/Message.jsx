import React,{useState} from 'react'
import './Message.css'
import { otp, verify_otp } from '../../actions/auth'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Message = ()=>{

const dispatch = useDispatch();
const navigate = useNavigate();
const [email,setEmail] = useState("")
const [otp1,setotp1] = useState("")

useEffect(()=>{
      //getTime gives axact time at present
      if(100 < new Date().getTime()){
        localStorage.clear('Otp')
        navigate("/otp")
    }
    
  },[dispatch, navigate])

const PostData = ()=>{
    dispatch(otp(email)) 
}

const Check= (otp1)=>{
    dispatch(verify_otp(otp1,navigate)) 
}



return (
    <div className="mycard">
        <div className="mycard-container">
        <h2>OTP Authentication for Chtabot Access</h2>
        <p>Enter your email and click on Generate OTP to generate OTP. Once you receive OTP, enter the otp and click verify.</p>
        <input
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
        />
        
        <button className="send-btn"onClick={()=>PostData()}>
        Generate OTP
        </button>
        <input
            type="text"
            placeholder="Enter OTP"
            value={otp1}
            onChange={(e)=>setotp1(e.target.value)}
        />
        
        <button className="otp-btn" onClick={()=>Check(otp1)}
        >Verify OTP</button>
        </div>
    </div>
)
}
export default Message