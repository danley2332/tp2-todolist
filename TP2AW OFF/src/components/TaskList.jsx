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




{/* 
import React, { useState } from 'react';

export default function TaskList() {

  const todoElements = props.todos.map(todo => (
    <Todo key={todo.id} done={todo.done} desc={todo.desc} id={todo.id} />
  ));

  return (
    <ul className="todo-list">
      {todoElements}
    </ul>
  );
}
*/}
