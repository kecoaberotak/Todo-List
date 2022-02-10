import React, { useState } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {text: 'Makan', id: 1},
        {text: 'Tidur', id: 2},
        {text: 'Main', id: 3}
    ])

    const addTodo = (isi) => {
        setTodos([
            ...todos,
            {text:isi, id: Math.random()}
        ]);
    }

    const removeTodo = (todoId) => {
        const filterTodo = todos.filter(todo => {
            return todo.id !== todoId;
        });

        setTodos(filterTodo);
    }

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            <p>{todo.text}</p>
                            <button onClick={removeTodo.bind(this,todo.id)}>Hapus</button>
                        </li>
                    )
                })}
            </ul>
            <AddNewTodo newTodo = {addTodo}/>
        </div>
    )
}


export default TodoList;