import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import {useSelector} from 'react-redux'

const HomeMainbar = () => {
  const location = useLocation()
  var user = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate();
  
  const questionsList = useSelector(state => state.questionsReducer)
  
  
  const CheckAuth = () =>
  {
     
      user === null ? redirect() :navigate('/AskQuestions')

  }
  const redirect = () =>
  {
      alert("Login or signup to ask a question");
      navigate("/Auth");

  }
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname === '/' ? 
          <h1>Top Questions</h1>
          :
          <h1>All Questions</h1>
        }    
        <button className='ask-btn' onClick={CheckAuth} >
          Ask Question
        </button>
      </div>
        <div>
         
          {
            questionsList.data === null 
            ? <h1>Loading....</h1>
            :
            <>
              <p>{ questionsList.data.length} questions</p>
              <QuestionList questionList={questionsList.data}/>
                
            </>
          }
        </div>
    </div>
  )
}

export default HomeMainbar
