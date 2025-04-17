import'./TaskList.css'
import React from'react'
import TaskItem from './Task.jsx'


export default function TaskList(props){
  const todoElements=props.todos.map(todo=>(
<TaskItem
  key={todo.id}
id={todo.id}
done={todo.done}
desc={todo.desc}
urgency={todo.urgency}
deleteItem={props.deleteItem}
updateStatus={props.updateStatus}
updateList={props.updateList}
/>
  ))

  return(
<ul className="todo-list">
  {todoElements}
</ul>
  )
}




