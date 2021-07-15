import React, {useState} from 'react'
import Toggle from 'react-toggle'
import "react-toggle/style.css";

function ToggleMode() {

    const [darkTheme, setDarkTheme] = useState(false)

    const handleDarkThemeChange = () => {
        setDarkTheme(!darkTheme)
    }

    return (
        <div className="ToggleMode">
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

export default ToggleMode