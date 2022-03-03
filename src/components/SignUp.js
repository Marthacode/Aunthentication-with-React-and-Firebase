import React, {useRef, useState} from 'react'
import {useAuth } from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

function SignUp() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const comfirmpasswordRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()    

    async function handleSubmit(e){
        e.preventDefault()

        if (passwordRef.current.value !== comfirmpasswordRef.current.value){
            return setError('Passwords do not match')
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch{
            setError('Failed to create an Account')
        }
        setLoading(false)
    }

    return (
<>      
    <div className="card">
      <div className="card-body">
        <h2 className="text-center mb-4">Sign Up</h2>
        {error}
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" id="email" ref={emailRef} required />
            </div>
            <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="password" ref={passwordRef} required />
            </div>
            <div className="form-group">
          <label>Comfirm Password</label>
          <input type="password" className="form-control" id="comfirm-password" ref={comfirmpasswordRef} required />
          </div>
          <button disabled={loading} className="btn btn-primary w-100" type="submit">Sign Up</button>
        </form>
    </div>
    </div>
    <div className="w-100 text-center mt-2">
      Already have an Account? <Link to="login">Login</Link>
    </div>    
</>
    )
}

export default SignUp
