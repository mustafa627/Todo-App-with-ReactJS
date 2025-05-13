import { useState } from "react";

function App() {
const [ inputTodo, setInputTodo] = useState("")
const [ todos, setTodos] = useState([])
const addTodo = () =>{
  // document.getElementById("input").value
  console.log(inputTodo, "inputTodo")

  setTodos([...todos, inputTodo])
}

  return(
<>
<h1>Todo App</h1>
<input type="text" name="" id="input" 
onChange={(e) => setInputTodo(e.target.value)
}/>
<button onClick={addTodo}>ADD TODO</button>

{
todos.map((todos, index) => {
  return(
<div key={index}>
  <li>{todos}</li>
  <button>EDIT</button>
  <button>Delete</button>
</div>
  )
})

}
</>
  )
}

export default App;
