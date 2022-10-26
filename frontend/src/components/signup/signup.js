import React, { useState } from 'react'
import "./signup.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(
        {
            name: "",
            email: "",
            password: "",
            reEnterPassword: "",
        }
    )
    const register = () => {
        const { name, email, password, reEnterPassword } = user;
        if (name && email && password && (password === reEnterPassword)) {
            axios.post('http://localhost:9002/register', user).then( (e) => {
                console.log(e.data.message)
                navigate('/login')
            })
        } else {
            alert('invalid post')
        }
    }
    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    return (
        <div className='signup'>
            <div className="signup">
                <h1>SignUp</h1>
                <input type="text" name="name" value={user.name} onChange={handleChange} placeholder='name' />
                <input type="email" name="email" value={user.email} onChange={handleChange} placeholder='email' />
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder='password' />
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} placeholder='re-type password' />

                <div className="button" onClick={register}>
                    Signup
                </div>
                <div>or</div>
                <div className="button" onClick={()=>navigate('/login')}>
                    signin
                </div>
            </div>
        </div>
    )
}

export default Signup;