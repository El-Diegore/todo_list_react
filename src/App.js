import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Curso React', completed: false},
  {text: 'Terminar proyecyo Astro', completed: false},
  {text: 'Cocinar almuerzo', completed: true},
  {text: 'Lavar los platos', completed: false},
]
function App() {
 const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');
console.log(searchValue)
  const completedTodos = todos.filter((todo)=> !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase()
    return todoText.includes(searchText)
  });

  const checkTodo = (text)=>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo)=> todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
    }

    const deleteTodo = (text)=>{
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex(
        (todo)=> todo.text == text
      );
      newTodos.splice(todoIndex, 1);
      setTodos(newTodos);
      }

  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={()=> checkTodo(todo.text) }
          onDelete={()=> deleteTodo(todo.text)} />
        ))}
      </TodoList>

      {<CreateTodoButton/>}
 
    </>
  );
}



export default App;
