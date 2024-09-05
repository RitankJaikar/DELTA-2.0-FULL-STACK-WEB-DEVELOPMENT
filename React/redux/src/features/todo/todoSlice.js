//all reducers related to todo
import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            key: nanoid(),
            task: "demo-task",
            isDone: false
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                key: nanoid(),
                task: action.payload,
                isDone: false
            };
            state.todos.push(newTodo);  //direct mutation
        },
        deleteTodo: (state, action) => {
            // console.log(state.todos[0].key, action.payload);
            state.todos = state.todos.filter(todo => todo.key !== action.payload);
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map(todo => {
                if(todo.key === action.payload) {
                    todo.isDone = true;
                }
                return todo;
            });
        }
    }
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions

export default todoSlice.reducer;