import'./Todoform.css'

export default function TodoForm(props){
function add(formData){
  const todoDesc=formData.get("todo-desc").trim()

//verifie que l'input est pas vide
if(todoDesc!==""){
props.addTodo(todoDesc)
}}

return(
<form action={add} className="todo-input">
<input name="todo-desc"
 type="text"
  placeholder="Add a new task ..." />
  <button>Ajouter</button>
</form>
)
}





{/* 
import './Todoform.css'

export default function TodoForm(props) {
  function add(formData) {
    const todoDesc = formData.get("todo-desc")
    props.addTodo(todoDesc)
  }

  return (
    <form action={add} class="todo-input">
      <input name="todo-desc" type="text" placeholder="Add a new task ... " />
      <button>Ajouter</button>
    </form>
  )
}
*/}


