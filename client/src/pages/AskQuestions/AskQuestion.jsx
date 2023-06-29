import React , {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {askQuestion} from '../../actions/question'
import './AskQuestions.css'

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("")
  const [questionBody, setQuestionBody] = useState("")
  const [questionTags, setQuestionTags] = useState("")
  
  const dispatch = useDispatch();
  const User = useSelector((state)=>(state.currentUserReducer))
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({questionTitle, questionBody, questionTags})
    //user has result and token
    dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted: User.result.name, userId:User?.result._id},navigate))
    
  }

  const handleEnter = (e) => {
    if(e.key === 'Enter'){
      setQuestionBody(questionBody + "\n")
    }
  }
  return (
    <div className='ask-question'>
      <div className='ask-ques-container'>
        <h1> Ask a public Question</h1>
        {/* <h1>{questionBody}</h1> //enter and space won't be differentiated*/}
        <form onSubmit={handleSubmit}>
          <div className='ask-form-container'>
            <label htmlFor='ask-ques-title'>
              <h4>Title</h4>
              <p>Be specific and imagine you're asking a question to another person</p>
              <input type="text" onChange={(e)=>{setQuestionTitle(e.target.value)}} id='ask-ques-title' placeholder='e.g. Is there an R function for finding the index of an element in a vector?'></input>
            </label>
            <label htmlFor='ask-ques-body'>
              <h4>Body</h4>
              <p>Include all the information someone would need to answer your question</p>
              {/* handle enter key */}
              <textarea name="" onChange={(e)=>{setQuestionBody(e.target.value)}} id="ask-ques-body" cols="30" rows="10" onKeyPress={handleEnter}></textarea>
              
              </label>
            <label htmlFor='ask-ques-tags'>
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input type="text" onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}} id='ask-ques-tags' placeholder='e.g. (xml typescript wordpress)'></input>
            </label>
            </div>
            <input type='submit' value='Review your question' className='review-btn'></input>
        </form>
      </div>
    </div>
  )
}

export default AskQuestion