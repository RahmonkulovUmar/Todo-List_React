import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
 
  return (
    <div className="Todo">
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div className='icons'>
        <TiEdit className='edit-icon' icon={TiEdit} onClick={() => editTodo(task.id)} />
        <RiCloseCircleLine className='delete-icon' icon={RiCloseCircleLine} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
