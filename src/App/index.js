import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

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

return(
  <TodoProvider>
    <AppUI />
  </TodoProvider>
)
}



export default App;
