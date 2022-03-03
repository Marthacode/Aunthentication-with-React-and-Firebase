import React, {useRef, useState} from 'react'
import {useAuth } from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

function UpdateProfile() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const comfirmpasswordRef = useRef()
    const {currentUser, updateEmail, updatePassword} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()    

    function handleSubmit(e){
        e.preventDefault()

        if (passwordRef.current.value !== comfirmpasswordRef.current.value){
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true)
        setError('')
        if (emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }
        Promise.all(promises).then(() =>{
            history.push('/')
        }).catch(()=>{
            setError('Failed to update account')
        })
        .finally(()=>{
            setLoading(false)
        })

    }

    return (
<>      
    <div className="card">
      <div className="card-body">
        <h2 className="text-center mb-4">Update Profile</h2>
        {error}
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" id="email" ref={emailRef} required defaultValue={currentUser.email} />
            </div>
            <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="password" ref={passwordRef} placeholder="Leace blank to keep the same" />
            </div>
            <div className="form-group">
          <label>Comfirm Password</label>
          <input type="password" className="form-control" id="comfirm-password" ref={comfirmpasswordRef} placeholder="Leace blank to keep the same"  />
          </div>
          <button disabled={loading} className="btn btn-primary w-100" type="submit">Sign Up</button>
        </form>
    </div>
    </div>
    <div className="w-100 text-center mt-2"> 
     <Link to="/">Cancel</Link>
    </div>    
</>
    )
}

export default UpdateProfile

