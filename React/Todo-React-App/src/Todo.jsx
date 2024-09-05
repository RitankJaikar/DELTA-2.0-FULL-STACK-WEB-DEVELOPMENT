import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function addTask(event) {
    event.preventDefault();
    console.log(event);
}

export default function Todo() {
    let [todos, setTodos] = useState([{task: "Eat", id: uuidv4()}, {task: "Sleep", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");
    console.log("re-rendered");

    function addNewTask() {
        setTodos(prevTodo => {return [...prevTodo, {task: newTodo, id: uuidv4()}]});
        setNewTodo("");
    }

    function updateTodoValue(event) {
        setNewTodo(event.target.value);
    }

    function deleteTodo(id) {
        setTodos(prevTodos => {return prevTodos.filter((todo) => todo.id !== id)});
    }

    function allUpperCase() {
        setTodos(prevTodos => {
            return prevTodos.map(prevTodo => {
                return {
                    ...prevTodo, task: prevTodo.task.toUpperCase()
                }
            })
        });
    }

    function upperCaseTodo(id) {
        setTodos(prevTodos => {
            return prevTodos.map(prevTodo => {
                if(prevTodo.id === id) {
                    return {
                        ...prevTodo, task: prevTodo.task.toUpperCase()
                    }
                }
                else {
                    return prevTodo;
                }
            })
        })
    }

    console.log(todos);
    function updateTask(event, id) {
        //console.log(event.target.checked, id);
        setTodos(prevTodos => {
            return prevTodos.map(prevTodo => {
                if(prevTodo.id === id) {
                    return {
                        ...prevTodo, isDone: event.target.checked
                    }
                }
                else {
                    return prevTodo;
                }
            })
        });
    }

    return (
        <div className="main">
            <h2>TODO List:-</h2>
            <input type="text" placeholder="Add a task" value={newTodo} onChange={updateTodoValue}/>
            &nbsp; &nbsp;
            <button onClick={addNewTask}>Add</button>
            <h4>Tasks TODO:-</h4>
            <ul className="todo-list">
                {
                    todos.map(todo => {
                        return <li key={todo.id}>
                            <span style={todo.isDone ? {textDecoration: "line-through"} : {}}>{todo.task}</span>
                            &nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)} style={{padding: "4px", marginBottom:"4px"}}>Delete</button>
                            &nbsp;&nbsp;
                            <button onClick={() => upperCaseTodo(todo.id)} style={{padding: "4px", marginBottom:"4px"}}>Update</button>
                            &nbsp;&nbsp;
                            <input type="checkbox" onChange={(event) => updateTask(event, todo.id)}/>
                        </li>
                    })
                }
            </ul>
            <button onClick={allUpperCase}>ALL Upper Case</button>
        </div>
    );
}