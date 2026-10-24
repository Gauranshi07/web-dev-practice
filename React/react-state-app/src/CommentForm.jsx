import React from 'react'
import { useState } from 'react'
import "./CommentForm.css"

const CommentForm = ({addNewComment}) => {
    const [formData,setFormData] = useState({
        username:"",
        remarks:"",
        rate:5
    })

    function handleFormData(evt){
        setFormData((currData)=>{
            return {...currData, [evt.target.name]: evt.target.value}
        })
    }

    function handleFormSubmit(evt){
        console.log(formData)
        addNewComment(formData)
        evt.preventDefault();
        setFormData({
        username:"",
        remarks:"",
        rate: 5
        })
    }
  return (
    <div>
        <h2>Give a Comment!</h2>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">User Name: </label>
            <input type="text" placeholder="Enter username" id="username" value={formData.username} name="username" onChange={handleFormData}/>
            <br></br><br></br>

            <label htmlFor="remark">Remark: </label>
            <textarea placeholder="Add a Remark" id="remark" value={formData.remarks} name="remarks" onChange={handleFormData}></textarea>
            <br></br><br></br>

            <label htmlFor="rate">Rating: </label><br></br>
            <input type="radio" id="rate" name="rate" value="1" checked={formData.rate==1} onChange={handleFormData}/>1 &nbsp;&nbsp;&nbsp;
            <input type="radio" id="rate" name="rate" value="2" checked={formData.rate==2} onChange={handleFormData}/>2 &nbsp;&nbsp;&nbsp;
            <input type="radio" id="rate" name="rate" value="3" checked={formData.rate==3} onChange={handleFormData}/>3 &nbsp;&nbsp;&nbsp;
            <input type="radio" id="rate" name="rate" value="4" checked={formData.rate==4} onChange={handleFormData}/>4 &nbsp;&nbsp;&nbsp;
            <input type="radio" id="rate" name="rate" value="5" checked={formData.rate==5} onChange={handleFormData}/>5 &nbsp;&nbsp;&nbsp;
            <br></br><br></br>

            <button>Add Comment</button>
        </form>
    </div>
  )
}

export default CommentForm