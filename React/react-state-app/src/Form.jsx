import {useState} from 'react'

export default function Form(){
    const [formData,setFormData] = useState({
        fullName: "",
        userName: ""
    })

    function handleInputChange(evt){
        // let fieldName = evt.target.name;
        // let newValue = evt.target.value;
        
        setFormData((currData)=>{
            // currData[fieldName] = newValue;
            // return{...currData}

            // return{...currData, [fieldName]: newValue}

            return{...currData, [evt.target.name]: evt.target.value}
        })
    }

    function handleFormSubmit(evt){
        evt.preventDefault();
        setFormData({
            fullName: "",
        userName: ""
        })
    }
    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="fullName">Full Name: </label>
            <input placeholder="Enter full name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"/>
            {/* yaha pr hum name ko bilkul same rkhenge humare object ki key se taaki wahi form ki state update ho jisse hum krna chahte hai */}

            <label htmlFor="username">User Name: </label>
            <input placeholder="Enter user name" type="text" value={formData.userName} onChange={handleInputChange} id="username"  name="userName"/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}