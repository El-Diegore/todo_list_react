import React from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {setOpenModal, addTodo } = React.useContext(TodoContext)
    const [newTodoText, setNewTodoText] = React.useState('')
    const onSubmit = (event)=> {
        event.preventDefault();
        addTodo(newTodoText)
        setOpenModal(false);
    }
    const onCancel = ()=>{
        setOpenModal(false)
    }
    const onChange = (event) =>{
        setNewTodoText(event.target.value)
    }

  return (
    <form action="" 
        onSubmit={onSubmit}>
        <label htmlFor="textarea">Escribe tu nuevo TODO</label>
        <textarea value={newTodoText} onChange={onChange} name="" id="textarea" placeholder='Cocinar almuerzo hoy'></textarea>
        <div className="btn-group">
            <button type='submit' className='btn btn-form-add'>Agregar</button>
            <button type='button' className='btn btn-form-cancel' onClick={onCancel}>Cancelar</button>
        </div>
    </form>
  )
}

export {TodoForm}