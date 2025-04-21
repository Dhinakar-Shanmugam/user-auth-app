import React from 'react'
import signup from '../assets/signup.png'
import { useState } from 'react'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import {createCookie, useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const handleLogin = () => {
    const data = {
      email,
      password,
    }

    if(!email | !password) {
      enqueueSnackbar('Please fill all the fields', { variant: 'error' })
    }

    axios
      .post('http://localhost:3000/api/users/login', data)
      .then((res) => {
        enqueueSnackbar('User logged successfully', { variant: 'success' })
        const userId = res.data.id;
        localStorage.setItem('token', res.data.token)
        navigate(`/user/home/${userId}`)
      })
      .catch((error) => {
        enqueueSnackbar('Login failed', { variant: 'error' })
        console.log(error)
      })
  }

  return (
    <div className='container flex max-sm:flex-col'>
        <div className="max-sm:hidden sign-img flex flex-col h-screen w-1/2">
            <img src={signup} alt="signup-img"/>
        </div>
        <div className="m-auto flex flex-col">
            <h1 className='my-4 text-3xl font-bold'>Log In</h1>
            <p className='my-4'>Enter to get unlimited access to data & information</p>
            <label className='font-bold my-4'>Email<span style={{color:"red"}}>*</span></label>
            <input type="text" style={{border:"1px solid black"}} className='rounded p-3' 
                   placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
            <label className='font-bold my-4'>Password<span style={{color:"red"}}>*</span></label>
            <input type="password" style={{border:"1px solid black"}} className='rounded p-3' 
                   placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/>
            <button style={{backgroundColor:"#4B53F2", color:"white"}} className='my-5
                   p-3 rounded' onClick={handleLogin}>Log In</button>
            <center><p className='my-2'>Don't have an account ? 
              <Link to={"/"}>
              <span style={{color:"#4B53F2"}}
                className='underline'>Register Here
              </span>
              </Link>
            </p></center>
        </div>
    </div>
  )
}

export default Login
