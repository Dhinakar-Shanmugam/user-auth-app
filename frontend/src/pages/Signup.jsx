import React, { useState } from 'react'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const handleSignup = () => {
    const data = {
      name,
      email,
      password,
    }
    if(!name | !email | !password) {
      enqueueSnackbar('Please fill all the fields', { variant: 'error' })
    }
  

    axios
      .post('http://localhost:3000/api/users/signup', data)
      .then((res) => {
        enqueueSnackbar('User created successfully', { variant: 'success' })
        const userId = res.data.id;
        navigate(`/user/home/${userId}`);
      })
      .catch((error) => {
        enqueueSnackbar('Signup failed', { variant: 'error' })
        console.log(error)
      })
  }

  return (
    <div className='container flex max-sm:flex-col'>
      <div className="m-auto flex flex-col ">
        <h1 className='my-4 text-3xl font-bold'>Welcome Back !</h1>
        <p className='my-4'>Enter to get unlimited access to data & information</p>

        <label className='font-bold my-4'>Name<span style={{ color: "red" }}>*</span></label>
        <input
          type="text"
          style={{ border: "1px solid black" }}
          className='rounded p-3'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className='font-bold my-4'>Email<span style={{ color: "red" }}>*</span></label>
        <input
          type="text"
          style={{ border: "1px solid black" }}
          className='rounded p-3'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className='font-bold my-4'>Password<span style={{ color: "red" }}>*</span></label>
        <input
          type="password"
          style={{ border: "1px solid black" }}
          className='rounded p-3'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{ backgroundColor: "#4B53F2", color: "white" }}
          className='my-5 p-3 rounded'
          onClick={handleSignup}
        >
          SignUp
        </button>
        <center>
          <p className='my-2'>
            Already have an account ?{' '}
            <Link to={"/user/login"}>
            <span style={{ color: "#4B53F2" }} className='underline'>
              Login Here
            </span>
            </Link>
          </p>
        </center>
      </div>
      <div className="max-sm:hidden sign-img flex flex-col h-screen w-1/2">
        <img src="./src/assets/signup.png" alt="signup-img"/>
      </div>
    </div>
  )
}

export default Signup

