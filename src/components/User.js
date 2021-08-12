import React, {useContext} from 'react'
import {TodoContext} from '../context'
import logo from "../images/react.jpg"

function User() {

    const { darkTheme } = useContext(TodoContext)
    return (
        <div className='User'> {/*  style={{border: darkTheme ? "black" : "black"}} */}
            {/* <div className="Logo">
                <img src={logo} alt="logo" />
            </div> */}
            <div className="info">
                <p>Todo app</p>
                <a href="#" style={{color: darkTheme ? "#ffffff" : "#000000"}}>Logout!</a>
            </div>
        </div>
    )
}

export default User 