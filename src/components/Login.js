import React, {useRef, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch{
            setError('Failed to sign in')
        }
        setLoading(false)
    
    }
    return (
        <>      
    <div className="card">
      <div className="card-body">
        <h2 className="text-center mb-4">Login</h2>
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
          <button disabled={loading} className="btn btn-primary w-100" type="submit">Login</button>
        </form>
    </div>
    <div className="w-100 text-center my-3">
        <Link to="/forgot-password">Forgot Password?</Link>
    </div>
    </div>
    <div className="w-100 text-center mt-2">
      Don't have an Account? <Link to="/signup">Sign Up</Link>
    </div>    
</>
    )
}

export default Login
