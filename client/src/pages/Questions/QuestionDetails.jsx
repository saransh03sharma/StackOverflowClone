import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { useState } from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import copy from 'copy-to-clipboard'

import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { postAnswer, deleteQuestion, voteQuestion} from '../../actions/question.js'



const QuestionDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    
    const questionsList = useSelector(state => state.questionsReducer)
    const User = useSelector(state => state.currentUserReducer)
    const navigate = useNavigate()
    const location = useLocation()
    const url = "https://stack-overflow-client.onrender.com"

    const [Answer, setAnswer] = useState("")

    const handleDelete=()=>{
        dispatch(deleteQuestion(id,navigate))
    }


    const handlePostAns=(e,answerLength)=>{
        e.preventDefault()
        if(User === null){
            alert("Login or Signup to answer a question")
            navigate("/Auth")
        }
        else{
            if(Answer ==='')
            {
                alert("Enter an answer before submitting")
            }
            else{
                dispatch(postAnswer({id, noOfAnswers:answerLength+1, answerBody: Answer, userAnswered:User.result.name, userId: User.result._id}))
            }
            
        }

    }
    const handleShare=()=>{
        copy(url+location.pathname)
        alert("copied url: "+url+location.pathname)
    }

    const handleUpVote=()=>{
        
        dispatch(voteQuestion(id, 'upvote', User.result._id))
    }

    const handleDownVote=()=>{
        dispatch(voteQuestion(id, 'downvote', User.result._id))
    }
    return (
    <div className='question-details-page'>
        
        {
            questionsList.data === null ? <h1>Loading....</h1>
            : <>
            
                {
                    questionsList.data.filter(question => question._id ===id).map(question =>(
                       <div key={question._id}>
                        
                        <section className='question-details-container'>
                            <h1>{question.questionTitle}</h1>
                            
                            <div className='question-details-container-2'>
                                <div className='question-votes'>
                                    <img src={upvote} alt="" width='18' className='votes-icon' onClick={handleUpVote}>
                                    </img>
                                    <p>{question.upVote.length - question.downVote.length}</p>
                                    <img src={downvote} alt="" width='18' className='votes-icon' onClick={handleDownVote}></img>
                                </div>
                                <div style={{width:'100%'}}>
                                    <p className='question-body'>{question.questionBody}</p>
                                    <div className="question-details-tags">
                                       { question.questionTags.map((tag) => (
                                            <p key={tag}> {tag}</p>
                                        ))
                                       }
                                    </div>
                                    <div className='question-actions-user'>
                                        <div>
                                            <button type='button' onClick={handleShare}>Share</button>
                                            {
                                                User?.result?._id === question?.userId && (
                                                    <button type='button' onClick={handleDelete}>Delete</button>)
                                            }
                                            
                                        </div>
                                        <div>
                                            <p className='time'>asked {moment(question.askedOn).fromNow()}</p>
                                            <Link to={`/Users/${question.userId}`} className="user-link" style={{color:'#0086d8'}}>
                                                <Avatar backgroundColor='orange' px='8px' py='5px'>
                                                    {question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                <div>
                                                    {question.userPosted}
                                                </div>
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {
                            question.noOfAnswers !== 0 &&
                            (
                                <section>
                                    <h3>{question.noOfAnswers} Answers</h3>
                                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                                 
                                </section>
                            )
                        }
                        <section className='post-ans-container'>
                            <h3> Your answer</h3>
                            <form className="" onSubmit={(e) => {handlePostAns(e, question.answer.length)}}>
                                <textarea name="" id="" cols="30" rows="10" onChange={(e)=>{setAnswer(e.target.value)}}></textarea><br />
                                <input type='submit' className='post-ans-btn' value='Post Your Answer'></input>
                            </form>
                            <p> Browse other Question tagged
                                        {
                                            question.questionTags.map((tag) => (
                                                <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                            ))
                                        } or 
                                        <Link to='/AskQuestion' style={{textDecoration: "none", color:"#009dff"}}> ask your own question.</Link>
                                    </p>
                        </section>
                       </div>


                    ))
                }
            
            </>
        }
    </div>
  )
}

export default QuestionDetails
