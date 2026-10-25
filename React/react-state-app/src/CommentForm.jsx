import React from 'react'
import { useState } from 'react'
import { useFormik } from 'formik';
import "./CommentForm.css"

 const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username cannot be empty';
   } 
   if(!values.remarks){
    errors.remarks = 'Remarks are required';
   }
   return errors;
 };

const CommentForm = ({addNewComment}) => {
    // const [formData,setFormData] = useState({
    //     username:"",
    //     remarks:"",
    //     rate:5
    // })

     const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rate: 5,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    // function handleFormData(evt){
    //     setFormData((currData)=>{
    //         return {...currData, [evt.target.name]: evt.target.value}
    //     })
    // }

    // function handleFormSubmit(evt){
    //     console.log(formData)
    //     addNewComment(formData)
    //     evt.preventDefault();
    //     setFormData({
    //     username:"",
    //     remarks:"",
    //     rate: 5
    //     })
    // }

  return (
    <div>
        <h2>Give a Comment!</h2>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">User Name: </label>
            <input type="text" placeholder="Enter username" id="username" value={formik.values.username} name="username" onChange={formik.handleChange}/>
            <br></br><br></br>
            {formik.errors.username ? <div style={{color:'red'}}>{formik.errors.username}</div> : null}

            <label htmlFor="remark">Remark: </label>
            <textarea placeholder="Add a Remark" id="remark" value={formik.values.remarks} name="remarks" onChange={formik.handleChange}></textarea>
            <br></br><br></br>
            {formik.errors.remarks ? <div style={{color:'red'}}>{formik.errors.remarks}</div> : null}

            <label htmlFor="rate">Rating: </label><br></br>
            <input type="radio" id="rate" name="rate" value="1" checked={formik.values.rate==1} onChange={formik.handleChange}/>1 &nbsp;&nbsp;&nbsp;
            <input type="radio" id="rate" name="rate" value="2" checked={formik.values.rate==2} onChange={formik.handleChange}/>2 &nbsp;&nbsp;&nbsp;
            <input type="radio" id="rate" name="rate" value="3" checked={formik.values.rate==3} onChange={formik.handleChange}/>3 &nbsp;&nbsp;&nbsp;
            <input type="radio" id="rate" name="rate" value="4" checked={formik.values.rate==4} onChange={formik.handleChange}/>4 &nbsp;&nbsp;&nbsp;
            <input type="radio" id="rate" name="rate" value="5" checked={formik.values.rate==5} onChange={formik.handleChange}/>5 &nbsp;&nbsp;&nbsp;
            <br></br><br></br>

            <button type="submit">Add Comment</button>
        </form>
    </div>
  )
}

export default CommentForm