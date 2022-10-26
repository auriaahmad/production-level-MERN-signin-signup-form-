import axios from 'axios'
import React, { useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom';

const Login = ({setLoginUser}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(
        {
        email:"",
        password:""
    }
)
    const login = e =>{
        console.log(user);
        axios.post('http://localhost:9002/login',user).then(res=>{
            console.log(res.data.user);
            console.log('here in front end');
            setLoginUser(res.data.user);
            navigate('/');
        })
}
    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    return(
        <div className="login">
            <h1>Login</h1>
            <input type="email" name="email" value={user.email} onChange={handleChange}  placeholder='email'/>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder='password'/>
            <div className="button" onClick={login}>
                login
            </div>
            <div>or</div>
            <div className="button" onClick={()=> navigate('/register')}>
                sign up
            </div>
        </div>
    )
}

export default Login;