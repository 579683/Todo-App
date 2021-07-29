// MÅ FIKSES

import React, {useState, useContext, useEffect} from 'react'
import TodoForm from './TodoForm'
import {TodoContext} from '../context'
import moment from 'moment'
import firebase from '../firebase'

function EditTodo() {

    // STATES
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [todoProject, setTodoProject] = useState('')

    // CONTEXT
    const { selectedTodo, projects, darkTheme } = useContext(TodoContext)

    useEffect(() => {
        // Only change when selectedTodo has been defined, and if selectedTodo has been changed
        if(selectedTodo) {
            setText(selectedTodo.text)
            setDay(moment(selectedTodo.date, 'MM/DD/YYYY'))
            setTime(moment(selectedTodo.date, 'hh:mm A'))
            setTodoProject(selectedTodo.projectName)
        }
    }, [selectedTodo])


    // This will only rerun if one of the states: "text", "day", "time", "todoProject" has been changed
    useEffect(() => {
        if(selectedTodo) {
            firebase    
                .firestore()
                .collection('todos')
                .doc(selectedTodo.id)
                .update({
                    text,
                    date: moment(day).format('MM/DD/YYYY'),
                    day: moment(day).format('d'),
                    time: moment(time).format('hh:mm A'),
                    projectName: todoProject
                })
        }
    }, [text, day, time, todoProject])


    // Function
    function handleSubmit(e) {
        
    }

    return (
        // Conditional rendering: Only shows the "Edit todo form" when clicking a selected todo
        <div>
            {
                selectedTodo &&
                <div className='EditTodo' style={{backgroundColor: darkTheme ? "#2F4F4F" : "white", color: darkTheme ? "white" : "black"}}>
                    <div className="header">
                        Edit todo
                    </div>
                    <div className="container">
                        <TodoForm handleSubmit={handleSubmit}  text={text} setText={setText} day={day} setDay={setDay} time={time} setTime={setTime} todoProject={todoProject} setTodoProject={setTodoProject} projects={projects} />
                    </div>
                </div>
            }
        </div>
    )
}

export default EditTodo 