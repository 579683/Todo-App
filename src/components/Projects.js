import React, {useContext, useState} from 'react'
import {Palette, PencilFill, CaretUp} from 'react-bootstrap-icons'
import {TodoContext} from '../context';
import AddNewProject from './AddNewProject'
import Project from './Project'

// Displays the projects on the sidebar
function Projects() {

    const [showMenu, setShowMenu] = useState(true);
    const [edit, setEdit] = useState(false);
    const pencilColor = edit ? "#1EC94C" : "#000000";

    // CONTEXT
    const {projects} = useContext(TodoContext)
    
    return (

        // Displays every projects under title "projects"
        <div className="Projects">
            <div className="header">
                <div className="title">
                    <Palette size="18"/>
                    <p>Projects</p>
                </div>

                {/* Display three buttons: a pen, a plus sign, and a triangle */}
                <div className="btns">
                    {
                        showMenu && projects.length > 0 && 
                        <span className="edit" onClick= {() => setEdit(edit => !edit)}>
                          <PencilFill size="15" color={pencilColor}/>
                        </span>
                    }
            
                    <AddNewProject />
                    <span className="arrow">
                        <CaretUp size="20" />
                    </span>
                </div>
            </div>
            
            {/* Displays the different projects listed */}
            <div className="items">
                {
                    projects.map(project => 
                        <Project project={project} key={project.id} edit={edit}/>    
                    )
                }
            </div>
        </div>
    )
}

export default Projects 