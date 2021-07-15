import React from 'react'

function ProjectForm({handleSubmit, heading, value, setValue, setShowModal, confirmButtonText}) {

    return (
        <form onSubmit={handleSubmit} className="ProjectForm">
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