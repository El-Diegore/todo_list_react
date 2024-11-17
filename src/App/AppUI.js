import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosErros';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import {Modal} from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const {
    
      loading, 
      error, 
      searchedTodos,
      checkTodo,
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext)
  
    return (
        <>
          <TodoCounter />
          <TodoSearch />
                  <TodoList>
                    {loading && <TodosLoading /> }
                    {error && <TodosError /> }
                    {(!loading && searchedTodos.length === 0) && <EmptyTodos /> }

                    {searchedTodos.map(todo => (
                      <TodoItem 
                      key={todo.text} 
                      text={todo.text} 
                      completed={todo.completed}
                      onComplete={()=> checkTodo(todo.text) }
                      onDelete={()=> deleteTodo(todo.text)} />
                    ))}
              </TodoList>
             
    
          <CreateTodoButton setOpenModal={setOpenModal} />
          {openModal && (<Modal>
              <TodoForm />
          </Modal>) }
          
        </>
      );
}

export {AppUI}