import'./Todoform.css'

export default function TodoForm(props){
function add(formData){
  const todoDesc=formData.get("todo-desc").trim()

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






