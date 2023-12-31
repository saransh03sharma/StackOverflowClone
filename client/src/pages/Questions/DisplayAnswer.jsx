import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteAnswer } from '../../actions/question'

const DisplayAnswer = ({question,handleShare}) => {
  const User = useSelector(state => state.currentUserReducer)
  const dispatch = useDispatch()
  const {id} = useParams()
  
  const handleDelete=(answerId, noOfAnswers)=>{
    dispatch(deleteAnswer(id,answerId,noOfAnswers-1))
}

  return (
    <div>
      {
        question.answer.map((ans)=>(
          <div className='display-ans' key={ans._id}>
            <p>{ans.answerBody}</p>
            <div className='question-actions-user'>
              <div>
              <button type='button' onClick={handleShare}>Share</button>
              {
                  User?.result?._id === ans?.userId && (
                      <button type='button' onClick={()=>handleDelete(ans._id, question.noOfAnswers)}>Delete</button>)
              }
              </div>
              <div>
                <p className='time'>answered {moment(ans.answeredOn).fromNow()}</p>
                <Link to={`/Users/${ans.userAnswered}`} className="user-link" style={{color:'#0086d8'}}>
                  <Avatar  backgroundColor="green" px='8px' py='5px' borderRadius='4px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                  <div>
                    {ans.userAnswered}
                  </div>
                </Link>
              </div>
            </div>
          </div> 
        ))
      }
    </div>
  )
}

export default DisplayAnswer
