import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

function ForgotPassword() {

    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [messege, setMessege] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        try{
            setMessege('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value) 
            setMessege('Check Your Email for futher Instructions')
           
        } catch{
            setError('Failed to Reset Password')
        }
        setLoading(false)
    
    }
    return (
        <>      
    <div className="card">
      <div className="card-body">
        <h2 className="text-center mb-4">Reset Password</h2>
        <div className="alert alert-primary" role="alert">{messege}</div>
        <div className="alert alert-danger" role="alert">{error}</div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" id="email" ref={emailRef} required />
            </div>
          <button disabled={loading} className="btn btn-primary w-100" type="submit">Reset Password</button>
        </form>
    </div>
    <div className="w-100 text-center my-3">
        <Link to="/login">Login</Link>
    </div>
    </div>
    <div className="w-100 text-center mt-2">
      Don't have an Account? <Link to="/signup">Sign Up</Link>
    </div>    
</>
    )
}

export default ForgotPassword

