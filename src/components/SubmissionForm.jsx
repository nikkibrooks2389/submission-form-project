import {useState} from "react"

const SubmissionForm = () => {

const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:""
 })

const handleFormData = (e) =>{
const {name,value} = e.target
    setFormData(prev =>({...prev,[name]:value}))
}

    return(
        <form>
            <input type="text" onChange={handleFormData} placeholder="Name" name="name" value={formData.name}></input>
            <input type="email" onChange={handleFormData}  placeholder="Email" name="email" value={formData.email}></input>
            <input type="textarea" onChange={handleFormData}  placeholder="Message" name="message" value={formData.message}></input>
        </form>
    )
}

export default SubmissionForm