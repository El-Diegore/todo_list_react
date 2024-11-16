import { useLocalStorage } from './useLocalStorage';
import React from 'react';
import { AppUI } from './AppUI';

/* const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Curso React', completed: false},
  {text: 'Terminar proyecyo Astro', completed: false},
  {text: 'Cocinar almuerzo', completed: true},
  {text: 'Lavar los platos', completed: false},
] 
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
*/
function App() {
  
 const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  //state del input
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
      (todo)=> todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    }

    const deleteTodo = (text)=>{
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex(
        (todo)=> todo.text === text
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
      }

return(
    <AppUI 
    completedTodos={completedTodos} 
    totalTodos={totalTodos} 
    searchValue={searchValue} 
    setSearchValue={setSearchValue} 
    searchedTodos={ searchedTodos}
    checkTodo={checkTodo}
    deleteTodo={deleteTodo}
    />
)
}



export default App;
