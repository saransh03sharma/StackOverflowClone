import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Question from './pages/Questions/Question'
import AskQuestion from './pages/AskQuestions/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import Chatbots from './pages/Chatbots/Chatbots'
import Message from './pages/message/Message'

const AllRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Auth' element={<Auth />}></Route>
        <Route path='/Questions' element={<Question />}></Route>
        <Route path='/AskQuestions' element={<AskQuestion />}></Route>
        <Route path='/Questions/:id' element={<DisplayQuestion />}></Route>
        <Route path='/Tags' element={<Tags />}></Route>
        <Route path='/Users' element={<Users />}></Route>
        <Route path='/Users/:id' element={<UserProfile />}></Route>
        <Route path='/chatbot' element={<Chatbots />}></Route>
        <Route path='/otp' element={<Message />}></Route>
      </Routes>
  )
}

export default AllRoutes
