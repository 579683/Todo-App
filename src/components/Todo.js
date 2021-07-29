import React, {useState, useContext} from 'react'
import {ArrowClockwise, CheckCircleFill, Circle, Trash} from 'react-bootstrap-icons'
import firebase from '../firebase'
import moment from 'moment'
import {TodoContext} from '../context'

// Shows the todos on the list 
function Todo({todo}) {

    //STATE
    const [hover, setHover] = useState(false)


    //CONTEXT 
    const { selectedTodo, setSelectedTodo, darkTheme } = useContext(TodoContext)

    // Delete function, which is used to delete the chosen todo, and removes the edit todo meny if the todo is selected
    const handleDelete = todo => {
        deleteTodo(todo)

        if(selectedTodo === todo) {
            setSelectedTodo(undefined)
        }
    }

    // Used to delete the todos 
    const deleteTodo = todo => {
        firebase
            .firestore()
            .collection('todos')
            .doc(todo.id)
            .delete()
    }


    // Used to check off then unchecked todos
    const checkTodo = todo => {
        firebase
            .firestore()
            .collection('todos')
            .doc(todo.id)
            .update({
                checked: !todo.checked
            })
    }
    
    // Used to repeat the same checked todos until next days
    const repeatNextDay = todo => {
        const nextDayDate = moment(todo.date, 'MM/DD/YYYY').add(1, 'days')

        const repeatedTodo = {
            ...todo,
            checked: false,
            date: nextDayDate.format('MM/DD/YYYY'),
            day: nextDayDate.format('d')
        }

        // Used to delete the old id, and add a new todo with a new id
        delete repeatedTodo.id

        firebase
            .firestore()
            .collection('todos')
            .add(repeatedTodo)
    }

    return (

        // Displays the todos in a project, and the different options to work around them
        <div className='Todo'>
           <div 
                className="todo-container"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >

                {/* Used to check off a spesific todo */}
               <div className="check-todo" onClick={() => {
                   checkTodo(todo);
                   setSelectedTodo(undefined);
               }}>
                   {
                       todo.checked ? 
                       <span className="checked">
                           <CheckCircleFill color="#bebebe" />
                       </span>
                       :
                       <span className="unchecked">
                           <Circle color={todo.color} />
                       </span>
                   }
               </div>

               {/* Displays the todos with details, option to check of the todos, option to display and hide the "Edit todo meny" */}
               <div className="text" onClick={() => !todo.checked ? setSelectedTodo(todo) : setSelectedTodo(undefined)}>
                   <p style={{color: darkTheme ? '#FFFFFF' : "#000000"}}>{todo.text}</p> {/* color: todo.checked ? '#bebebe' : "#000000"} */}
                   <span>{todo.time} - {todo.projectName}</span>
                   <div className={`line ${todo.checked ? 'line-through' : ''}`}></div>
               </div>

               {/* Onclick button to repeat the todos until next days */}
               <div className="add-to-next-day" onClick={() => repeatNextDay(todo)}>
                   {
                       todo.checked &&
                       <span>
                           <ArrowClockwise />
                       </span>
                   }
               </div>

               {/* Onclick button to delete the todos on a certain a day  */}
               <div className="delete-todo" onClick={() => handleDelete(todo)}>
                   {
                       (hover || todo.checked) &&
                       <span>
                           <Trash />
                       </span>
                   }
               </div>
           </div>
        </div>
    )
}

export default Todo 
