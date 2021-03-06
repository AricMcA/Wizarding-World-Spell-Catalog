import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/user'



const Login = () => {

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error ] = useState("")
    const {login} = useContext(UserContext)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => res.json())
        .then(user => {
            login(user)
            navigate('/')
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label className="text-teal-300">Username:</label>
                <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                <label>Password:</label>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <input type='submit'/>
            </form>
            <ul>
                <h3>{error}</h3>
            </ul>
        </div>
    )
}

export default Login
