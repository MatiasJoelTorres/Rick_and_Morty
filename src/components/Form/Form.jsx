import { useState } from "react";
import validator from "./Validate";


const Form = (props) => {

  const {login} = props

  const [errors, setErrors] = useState({})

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setErrors(validator({...userData, [event.target.name]: event.target.value}))
    setUserData({...userData, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(userData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input name="email" type="text" placeholder="example@example.com..." value={userData.email} onChange={handleChange}/>
          {errors.e1 ? (<p>{errors.e1}</p>) : errors.e2 ? (<p>{errors.e2}</p>) :  (<p>{errors.e3}</p>)}
          <label>Password</label>
          <input name="password" type="password" placeholder="Password..." value={userData.password} onChange={handleChange}/>
          {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)}
          <button>Submit</button>
      </form>
    </div>
  )
}

export default Form;