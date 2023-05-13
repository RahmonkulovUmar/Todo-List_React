import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      
        e.preventDefault();
        if (value) {

          addTodo(value);
          
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <div className='update-form'>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Add your todoes' />
      <button type="submit" className='todo-btn'>Add Todo</button>
    </div>
    </form>
    
  )
}
