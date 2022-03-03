import React, {useState} from 'react'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

function Dashboard() {
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')
        try{
            await logout()
            history.push('/login')
        }catch{
            setError('Failed to Log Out')
        }
    }

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4">Profile</h2>
                    {error}
                    <strong>Email:</strong>{currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profle</Link>
                </div>
            </div>
            <div className="w-100 text-center mt-2">
                <button className="btn btn-primary" variant="link" onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    )
}

export default Dashboard
