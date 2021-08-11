import React, {useContext, useState} from 'react'
import {Palette, PencilFill, CaretUp} from 'react-bootstrap-icons'
import {TodoContext} from '../context';
import AddNewProject from './AddNewProject'
import Project from './Project'
import { useSpring, animated } from 'react-spring'

// Displays the projects on the sidebar
function Projects() {

    const [showMenu, setShowMenu] = useState(true);
    const [edit, setEdit] = useState(false);
    const pencilColor = edit ? "#1EC94C" : "#000000";

    // CONTEXT
    const {projects} = useContext(TodoContext)
    
    // ANIMATION
    const spin = useSpring({
        transform: showMenu ? 'rotate(0deg)' : 'rotate(180deg)',
        config: { friction: 10 }
    })
    
    const menuAnimation = useSpring({
        display: showMenu ? 'block' : 'none',
        lineHeight: showMenu ? 1.2 : 0
    })

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
                    <animated.span className="arrow" onClick={() => setShowMenu(!showMenu)} style={spin}>
                        <CaretUp size="20" />
                    </animated.span>
                </div>
            </div>
            
            {/* Displays the different projects listed */}
            <animated.div style={menuAnimation} className="items">
                {
                    projects.map(project => 
                        <Project project={project} key={project.id} edit={edit}/>    
                    )
                }
            </animated.div>
        </div>
    )
}

export default Projects 