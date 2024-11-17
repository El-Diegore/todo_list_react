import React, { useState } from 'react'
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
        <label htmlFor="">Escribe tu nuevo TODO</label>
        <textarea value={newTodoText} onChange={onChange} name="" id="" placeholder='Cocinar almuerzo hoy'></textarea>
        <button type='submit' className='btn-form-add'>Agregar</button>
        <button type='button' className='btn-form-cancel' onClick={onCancel}>Cancelar</button>
    </form>
  )
}

export {TodoForm}