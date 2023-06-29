//axios for data communication
import * as api from '../api'
import { setCurrentUser } from './currentUser'

//redux thunk for async operations in redux

export const signup = (authData, navigate)=>async (dispatch) =>{
    try {
        //data is from backend
        //we have sent a request to backend and backend will reply with an 
        //acknowledgement along with token that will be stored in data
        const {data} = await api.signUp(authData)
        dispatch({type:'AUTH', data})//pass this to redux reducer
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
        //diaptch will jump to reducer
    } catch (error) {
        console.log(error)
    }
}
  
  export const otp = ( email ) => async(dispatch)=> {
    try {
      const {data} = await api.otp( email )
      localStorage.setItem('Otp',JSON.stringify({data}))

      alert("OTP send successfully")
      dispatch({type:"OTP", payload: data})
        
    } catch (error) {
      console.log(error)
    }  
  
  }

  export const verify_otp = ( otp,navigate ) => async(dispatch)=> {
    try {
      if (localStorage.getItem('Otp').slice(51,55) == otp)
      {
        navigate('/chatbot')
        localStorage.clear('Otp')
      }
      else{
        window.alert("Invalid OTP")
        localStorage.clear('Otp')
        navigate('/Otp')

      }
        
    } catch (error) {
      console.log(error)
    }  
  
  }
  export const login = (authData, navigate) => async (dispatch) => {
    try {
        //console.log("action login")
        //data is from backend
        //we have sent a request to backend and backend will reply with an 
        //acknowledgement along with token that will be stored in data
         
        const { data } = await api.logIn(authData)
        
        dispatch({type:'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
        //diaptch will jump to reducer
    } catch (error) {
        alert("Retry authenticating with correct credentails")
        console.error(error);
    }

}