import{useState}from"react"
import "./App.css"
import TodoForm from "./components/TodoForm"
import TaskList from "./components/TaskList"

export default function App(){
const [todos,setTodos]=useState([])
const[nextId,setNextId]=useState(1)

function addTodo(desc){
const newTodo={
id:nextId,
desc:desc,
done:false,
urgency:""
}
setTodos(prev=>[...prev,newTodo])
setNextId(prev=>prev+1)
}

function setDone(id){
setTodos(prev=>
prev.map(todo=>
  todo.id===id?{...todo,done:!todo.done}:todo
))
}

function deleteTodo(id){
setTodos(prev=>
  prev.filter(todo=>todo.id!==id))
}

function updateList(desc,urgency,id,done){
setTodos(prev=>
  prev.map(todo=>
    todo.id===id?{...todo,desc,urgency,done}:todo
))
}

return(
<div className="container">
<h1>Todo List</h1>
<TodoForm addTodo={addTodo}/>
<TaskList
todos={todos}
updateStatus={setDone}
deleteItem={deleteTodo}
updateList={updateList}
/>
</div>
)}
