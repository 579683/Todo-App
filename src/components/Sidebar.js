import React, {useState} from 'react'
import Toggle from 'react-toggle'
import "react-toggle/style.css";


function Sidebar({children}) {

    const [darkTheme, setDarkTheme] = useState(false)

    const handleDarkThemeChange = () => {
        setDarkTheme(!darkTheme)
    }

    return (
        <div className='Sidebar' style={{backgroundColor: darkTheme ? "black" : "white", color: darkTheme ? "white" : "black"}}>
            {children}
            <br></br>
            <div style={{textAlign: "center"}}>
                <Toggle
                    defaultChecked={false}
                    icons={{
                        checked: "🌜",
                        unchecked: "🌞",
                    }}
                    onChange={handleDarkThemeChange} 
                    />
            </div>
        </div>
    )
}

export default Sidebar 