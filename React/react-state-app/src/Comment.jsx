import React from 'react'
import { useState } from 'react'
import "./Comment.css"
import CommentForm from './CommentForm'

const Comment = () => {
    const [comment,setComment]=useState([
    {
        username: "@gv",
        remarks: "Great Job Gauranshi!",
        rate: 4
    },
])

    function addNewComment(comment){
        setComment((currComment)=> [...currComment, comment])
    }

  return (
    <>
    <CommentForm addNewComment={addNewComment}/>
    <div className="comments-section">
        <h2>All Comments</h2>
    <div className="Comment">
        {comment.map((comment,idx)=>(
            <div className="comment" key={idx}>
        <span style={{fontWeight:"bold", fontStyle:"italic"}}>{comment.remarks}</span>&nbsp;&nbsp;
        <span>(rating: {comment.rate})</span>
        <p>- {comment.username}</p>
        </div>
        ))}
    </div>
    </div>
    </>
  )
}

export default Comment