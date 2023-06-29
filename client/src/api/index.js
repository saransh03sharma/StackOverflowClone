//sepearte folder for axios
//request to backend is sent here
import axios from 'axios'

const API = axios.create({baseURL:"https://stack-overflow-server-7aoj.onrender.com/"});
//give base url of backend

//collected interceptors of every request
API.interceptors.request.use((req)=>{
    //modify every req
    //modify headers for extra security
    if(localStorage.getItem('Profile')){
        //req.body contains data of the request
        
        //header.authoritization will now contain users token also for every request
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
        //therefore for every action we will check if that token is valid or not
    }
    return req;
})



//authData would be the data to send to backend
//give a post request to user/login page
export const logIn = (authData) => API.post("/user/login",authData);
export const signUp = (authData) => API.post("/user/signup",authData);
export const postQuestion = (questionData) => API.post("/questions/Ask",questionData);
export const getAllQuestions = ()=> API.get("/questions/get")
export const postAnswer = (id,noOfAnswers, answerBody, userAnswered,userId) =>API.patch(`/answer/post/${id}`,{noOfAnswers, answerBody, userAnswered,userId});
export const deleteQuestion = (id)=>API.delete(`/questions/delete/${id}`)
export const deleteAnswer =(id, answerId, noOfAnswers)=>API.patch(`/answer/delete/${id}`,{answerId, noOfAnswers})
export const voteQuestion=(id, value,userId)=>API.patch(`/questions/vote/${id}`,{value, userId})
export const otp = ( email ) => API.post("/send",{ email});
export const verify_otp = ( email ) => API.post("/check",{ email});
export const fetchAllUsers = ()=>API.get('/user/getAllUsers')
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)


//nodejs is about restful api i.e. send req and res in form of json