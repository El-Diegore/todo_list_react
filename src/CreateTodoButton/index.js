import './CreateTodoButton.css'

function CreateTodoButton() {
  return (
    <button 
    className='CreateTodoButton' 
    onClick={(event)=>console.log("hice click") }
    >+</button>
  )
}

export {CreateTodoButton}