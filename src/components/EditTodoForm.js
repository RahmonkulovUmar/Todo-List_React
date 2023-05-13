import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      
        e.preventDefault();
        
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <div className='update-form'>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Change todo' />
      <button type="submit" className='todo-btn'>Update</button>
      </div>
  </form>
  )
}
