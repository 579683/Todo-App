import React, {useContext} from 'react'
import Todo from './Todo'
import Next7Days from './Next7Days'
import {TodoContext} from '../context'

function Todos() {
    const { todos, selectedProject, darkTheme,  } = useContext(TodoContext) 


    return (

        // Displays the calendar and the different options under 'today', 'next 7 days' and 'all days'
        <div className='Todos' style={{backgroundColor: darkTheme ? "#2F4F4F" : "white", color: darkTheme ? "white" : "black"}}>
            <div className="selected-project">
                {selectedProject}
            </div>
            <div className="todos">
            {
                selectedProject === "next 7 days" ?
                <Next7Days todos={todos} />
                :
                todos.map(todo => 
                    <Todo todo={todo} key={todo.id} />
                )
            }
            </div>
        </div>
    )
}

export default Todos 