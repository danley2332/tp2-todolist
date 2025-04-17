import './Task.css'

export default function TaskItem(props){
const todoTextClassName = props.done ? "todo-text done":"todo-text"
const doneButtonClass = props.done ? "done-button undone":"done-button"
  const doneSymbol=props.done?"↺":"✓"

return(
<li className="todo-item">
  <p className={todoTextClassName}>
    {props.desc}</p>
  <div className="todo-buttons">
  <button className={doneButtonClass}
   onClick={()=>props.updateStatus(props.id)}>
    {doneSymbol}
    </button>
<button className="delete-button"
onClick={()=>props.deleteItem(props.id)}>
  ✖
</button>
</div>
</li>
)
}
