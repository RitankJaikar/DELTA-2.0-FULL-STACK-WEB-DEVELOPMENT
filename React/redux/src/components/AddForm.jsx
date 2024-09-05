import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    function submitHandler(event) {
        event.preventDefault();
        setTask("");
        console.log(task);
        dispatch(addTodo(task));
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(event)=> setTask(event.target.value)} value={task}/>
                &nbsp;&nbsp;
                <button>Add Task</button>
            </form>
        </>
    )
}