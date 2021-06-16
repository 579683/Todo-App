import React from 'react'
import logo from "../images/react.jpg"

function User() {
    return (
        <div className='User'>
            {/* <div className="Logo">
                <img src={logo} alt="logo" />
            </div> */}
            <div className="info">
                <p>Todo app</p>
                <a href="#">Logout!</a>
            </div>
        </div>
    )
}

export default User 