import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);

    const dispatch = useDispatch();

    function deleteTask(key) {
        console.log(key);
        dispatch(deleteTodo(key));
    }

    function markTaskAsDone(key) {
        console.log(key);
        dispatch(markAsDone(key));
    }

    return(
        <div>
            <h3>TODOs</h3>
            <ul>
                {
                    todos.map(todo => {
                        return (
                            <li key={todo.key}>
                                <span style={todo.isDone ? {textDecoration: "line-through"} : {}}>
                                    {todo.task}
                                </span>
                                &nbsp;&nbsp;
                                <button onClick={() => deleteTask(todo.key)}>Delete</button>
                                &nbsp;&nbsp;
                                <button onClick={() => markTaskAsDone(todo.key)}>Mark As Done</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}