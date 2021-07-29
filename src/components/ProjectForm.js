import React, {useContext} from 'react'
import {TodoContext} from '../context'

function ProjectForm({handleSubmit, heading, value, setValue, setShowModal, confirmButtonText}) {

    const { darkTheme } = useContext(TodoContext)
    return (

        // Displays the form for adding a new project after clicking '+' under projects
        <form onSubmit={handleSubmit} className="ProjectForm" style={{backgroundColor: darkTheme ? "#2F4F4F" : "white", color: darkTheme ? "white" : "black"}}>
            <h3>{heading}</h3>

            {/* Input new project */}
            <input value={value} onChange={(e) => setValue(e.target.value)} type='text' placeholder='Project name...' autoFocus />
            
            {/* Cancel button */}
            <button className="cancel" role="button" onClick={() => setShowModal(false)}>
                Cancel
            </button>
            
            {/* Confirm new project */}
            <button className="confirm">
                {confirmButtonText}
            </button>
        </form>
    )
}

export default ProjectForm