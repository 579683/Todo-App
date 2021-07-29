import React, {useState, useEffect, useContext, useRef} from 'react'
import Toggle from 'react-toggle'
import "react-toggle/style.css";
import {TodoContext} from '../context';


function Sidebar({children}) {

    // CONTEXT
    const { selectedTodo, setSelectedTodo, darkTheme, setDarkTheme } = useContext(TodoContext)

    // REF: Return a object with a property called 'current'
    const siderbarRef = useRef()

    

    const handleDarkThemeChange = () => {
        setDarkTheme(!darkTheme)
    }

    
    // Used to hide the edit form meny is the sidebar is clicked on
    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [])

    // Target = sidebar | childrens (today, next 7 days, all days), Current = the div under
    const handleClick = e => {
        if(e.target === siderbarRef.current || siderbarRef.current.contains(e.target)) {
            setSelectedTodo(undefined)
        }
    }

    return (
        <div className='Sidebar' ref={siderbarRef} style={{backgroundColor: darkTheme ? "#2F4F4F" : "white", color: darkTheme ? "white" : "black", border: darkTheme ? "black" : "1px solid #ebebeb"}}>
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