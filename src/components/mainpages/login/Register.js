import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [user,setUser] = useState({
    name:'',
    email:'',
    password:''
  })

  const onChangeInput = e => {
    const {name,value} = e.target;
    setUser({...user,[name]:value})
  }

  const loginSubmit =async e => {
    e.preventDefault()
    try{
      await axios.post('https://e-comm-backend-z6qo.onrender.com/user/register',{...user})

      localStorage.setItem('firstRegister',true)

      window.location.href = "/"
      
    }catch(err){
      alert(err.response.data.msg)
    }
  }


  return (
    <div className='login-page'>
      <form onSubmit={loginSubmit}>
        <input type='name' name='name' required placeholder='Name' value={user.name} onChange={onChangeInput}/>
        <input type='email' name='email' required placeholder='Email' value={user.email} onChange={onChangeInput}/>
        <input type='password' name='password' required placeholder='Password' value={user.password} onChange={onChangeInput}/>

        <div className='row'>
          <button type='submit'>Register</button>
          <Link to='/login'>Login</Link>
        </div>


      </form>
    </div>
  )
}

export default Register
