import { useState } from "react";
import Button  from "./components/button";
function App() {
const [ inputTodo, setInputTodo] = useState("")
const [ todos, setTodos] = useState([])

//add todos
const addTodo = () =>{
 const input = document.getElementById("input")
  console.log(inputTodo, "inputTodo")
if (!inputTodo) {
  return alert("Please enter a todo")
}

  setTodos([...todos, inputTodo])
  input.value = ""
}
// delete all todos
const deleteAll = () => {
  console.log("delete all")
  if(!todos.length) {
    return alert("No todos to delete")
  }
  setTodos([])
  alert("All todos deleted")
}

//edit todo
const editTodo = (index) => {
  console.log("edit todo" , index)
  var newTodo = prompt("Enter a Todo")
  if (!newTodo) {
    return alert("Please enter a todo")
  }
  todos.splice(index, 1, newTodo)
  setTodos([...todos])
}

const deleteTodo = (index) => {
  console.log("delete todo" , index)
  todos.splice(index, 1)
  setTodos([...todos])
}



  return(
<>
<h1>Todo App</h1>
<input type="text" name="" id="input"  placeholder="Enter a todo"
onChange={(e) => setInputTodo(e.target.value)
}/>

{/* <button onClick={addTodo}>ADD TODO</button>
<button>DELETE ALL</button> */}

<Button name="Add Todo"
handleClick={addTodo}/>
<Button name="Delete All" 
handleClick={deleteAll}/>


{
todos.map((todos, index) => {
  return(
<div key={index}>
  <li>{todos}</li>
  {/* <button>EDIT</button>
  <button>Delete</button> */}

<Button name="Edit"  
handleClick={() => editTodo(index)}/>
<Button name="Delete" 
handleClick={() => deleteTodo(index)}/>



</div>
  )
})

}
</>
  )
}

export default App;
