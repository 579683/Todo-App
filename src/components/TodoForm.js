import React, {useContext} from 'react'
import {Bell, CalendarDay, Clock, Palette, X} from 'react-bootstrap-icons'
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {TodoContext} from '../context';

function TodoForm({handleSubmit, heading = false, text, setText, day, setDay, time, setTime, todoProject, setTodoProject, projects, showButtons = false, setShowModal = false }) {

    const { darkTheme } = useContext(TodoContext)
    return (

        // Displays the form for adding a new todo after clicking the '+ New todo'
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form onSubmit={handleSubmit} className="TodoForm" style={{backgroundColor: darkTheme ? "#2F4F4F" : "white", color: darkTheme ? "white" : "black"}}>
            <div className="text">
                {
                    heading &&
                    <h3>{heading}</h3>
                }
                <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder='To do ...' autoFocus />                       
            </div>
            <div className="remind">
                <Bell />
                <p>Remind me!</p>
            </div>
            <div className="pick-day">
                <div className="title">
                    <CalendarDay />
                    <p>Choose a day</p>
                </div>
                <DatePicker value={day} onChange={day => setDay(day)} />
            </div>
            <div className="pick-time">
                <div className="title">
                    <Clock />
                    <p>Choose time</p>
                </div>
                <TimePicker value={time} onChange={time => setTime(time)} />
            </div>
            <div className="pick-project">
            <div className="title">
                    <Palette />
                    <p>Choose a project</p>
                </div>
                <div className="projects">
                    {
                        projects.length > 0 ?
                        projects.map(project => 
                            <div className={`project ${todoProject === project.name ? "active" : ""}`} key={project.id} onClick={() => setTodoProject(project.name)}>
                                {project.name}
                            </div>
                        )
                        :
                        <div style={{color: '#ff0000'}}>
                            Please add a project before proceeding
                        </div>
                    }
                </div>
            </div>
            {
                showButtons &&
                <div>
                    <div className="cancel" onClick = {() => setShowModal(false)}>
                        <X size='40'/>
                    </div>
                    <div className="confirm">
                        <button>+ Add to do</button>
                    </div>
                </div>
            }
        </form>
        </MuiPickersUtilsProvider>
    )
}

export default TodoForm 

