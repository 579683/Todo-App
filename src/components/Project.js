import React, {useContext, useState} from 'react'
import {Pencil, XCircle} from 'react-bootstrap-icons'
import Modal from "./Modal"
import RenameProject from './RenameProject'
import {TodoContext} from '../context'
import firebase from '../firebase'

function Project({project, edit}) {

    // CONTEXT
    const {defaultProject, selectedProject, setSelectedProject, darkTheme} = useContext(TodoContext)
    // STATE
    const [showModal, setShowModal] = useState(false)


    // Used to delete project, the todos and selected project to default, which is "Today"
    const deleteProject = project => {
        firebase
            .firestore()
            .collection('projects')
            .doc(project.id)
            .delete()
            .then( () => {
                firebase
                    .firestore()
                    .collection('todos')
                    .where('projectName', '==', project.name)
                    .get()
                    .then( (querySnapshot) => {
                        querySnapshot.forEach( doc => {
                            doc.ref.delete()
                        })
                    })
            })
            .then( () => {
                if(selectedProject === project.name) {
                    setSelectedProject(defaultProject)
                }
            })
    }

    return (
        <div className="Project">

            {/* Display the name of the selected project, when clicked  */}
           <div className="name" onClick={() => setSelectedProject(project.name)}>
               {project.name}
           </div> 

            {/* Display the options to either edit or delete a project, when the pen is clicked  */}
           <div className="btns">
               {
                edit ? 
                <div className="edit-delete">
                  <span className="edit" onClick={() => setShowModal(true)}>
                      <Pencil size="13"/>
                  </span>
                  <span className="delete" onClick={() => deleteProject(project)}>
                      <XCircle size="13"/>
                  </span>
                </div>  
               : 
               project.numOfTodos === 0 ? "" : 
               <div className="total-todos" style={{background: darkTheme ? "#ebebeb" : "#ebebeb", color: darkTheme ? "black" : "black"}}> 
                   {project.numOfTodos}
               </div>
            }

           </div>

           {/* Display the modal */}
           <Modal showModal={showModal} setShowModal={setShowModal}>
                <RenameProject project={project} setShowModal={setShowModal} />
           </Modal>
        </div>
    )
}

export default Project