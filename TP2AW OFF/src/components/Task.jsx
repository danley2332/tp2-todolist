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



{/*
import './Task.css'

export default function Todo(props) {
  const doneButton = props.done ? <button className="done-button undone">↺</button> : <button className="done-button">✓</button>
  const todoTextClassName = props.done ? "todo-text done" : "todo-text"

  return (
    <li className="todo-item">
      <p className={todoTextClassName}>{props.desc}</p>
      <div className="todo-buttons">
        {doneButton}
        <button className="delete-button">✖</button>
      </div>
    </li>
  )
}
*/}

  
{/*  
            <li className="todo-item">
            <p className="todo-text done">Maîtriser les styles dynamiques</p>
            <div className="todo-buttons">
                <button className="done-button undone">↺</button>
                <button className="delete-button">✖</button>
            </div>
            </li>
    




 
<li className="todo-item">
  <p className="todo-text">Promener le chien</p>
  <div className="todo-buttons">
    <button className="done-button">✔</button>
    <button className="delete-button">✖</button>
  </div>
</li>
<li className="todo-item">
  <p className="todo-text">Faire le ménage</p>
  <div className="todo-buttons">
    <button className="done-button">✔</button>
    <button className="delete-button">✖</button>
  </div>
</li>
<li className="todo-item">
  <p className="todo-text">Faire le TP2</p>
  <div className="todo-buttons">
    <button className="done-button">✔</button>
    <button className="delete-button">✖</button>
  </div>
</li>
*/}


             