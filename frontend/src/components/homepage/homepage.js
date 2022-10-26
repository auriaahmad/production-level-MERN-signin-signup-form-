import React from 'react'
import "./homepage.css"
import { useNavigate } from 'react-router-dom'

const HomePage = ({setLoginUser}) => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="homepage">
                <h1>this is my home page</h1>
                <div className="button" onClick={()=>setLoginUser({})}>
                    LogOut
                </div>
            </div>
        </div>
    )
}

export default HomePage;