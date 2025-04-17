
1. Lorsqu'on charge la page initialement,
la liste de tâches est vide.
+ Initialisation de `useState()` avec
un tableau vide (`useState([])`)

2.
```js
todo = {
    id: number, //
    desc: String,
    done: boolean 
}
```
3. 
```js
function addTodo() {
    const newTodo = {
        id: //doit etre unique,
        desc: //ce qu'il y a dans l'input
        done: false  
    }
    setTodos(prevTodos => (
        [...prevTodos, newTodo]
    ))
}
```

4.
```js
function setDone(id) {
  setTodos (prevTodos => (
      prevTodos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo)
  ))
}
```

+  Texte de la description barrée => style dynamique !! (avec un ternaire 7 "on" : "")


5.
```js
function deleteTodo(id) {
    setTodos(prevTodos => prevTodos. filter(todo => todo. id !== id)
    )
}
```    











Fonctionnalités attendues
    1. Initialisation de la liste vide 
        => const [taskList, setTaskList] = useState([])
    2. Chaque tâche doit être représentée par un objet qui 
        comprend 3 propriétés : 
        un identifiant
        une description
        un statut

        taskList = [
            {
                id: 1,
                desc: "Faire le ménage",
                done: false
            },
            {
                id: 2,
                desc: "Laver la vaisselle",
                done: true
            },
            {
                id: 3,
                desc: "Comprendre useState()",
                done: false
            }
        ]