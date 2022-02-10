import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const addTodo = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            status: false
        }

        setTodos([...todos].concat(newTodo));
        setTodo('');
    }

    const deleteTodo = (todoId) => {
        const filterTodo = [...todos].filter((todo) => {
            return todo.id !== todoId;
        });
        console.log('delete')
        setTodos(filterTodo);
    }

    const statusTodo = (todoId) => {
        const status = [...todos].map(todo => {
            if(todo.id === todoId){
                todo.status = !todo.status;
            }
            return todo;
        });
        setTodos(status);
        console.log(todos);
    }

    const editTodo = (todoId) => {
        const updateTodo = [...todos].map((todo) => {
            if(todo.id === todoId){
                todo.text = editText;
            }
            return todo;
        });

        setTodos(updateTodo);
        setEditId(null);
        setEditText("");
    }

    return (
        <div>
            <h1>TODO LIST</h1>
            {todos.map((todo) => 
            <ul key={todo.id}>
                <li>
                    {editId === todo.id ? 
                        (<input type="text"  onChange={(e) => setEditText(e.target.value)} value={editText}/>) 
                        : 
                        (<>{todo.text}</>)}
                    <button onClick={deleteTodo.bind(this,todo.id)}>Delete</button>
                    {editId === todo.id ? 
                        (<button onClick={editTodo.bind(this,todo.id)}>Submit Edit</button>) 
                        : 
                        (<button onClick={()=>setEditId(todo.id)}>Edit</button>)}
                    <input type="checkbox" onChange={statusTodo.bind(this,todo.id)} checked={todo.status}/>
                    {console.log(editId)}
                </li>
            </ul>)}
            <form onSubmit={addTodo}>
                <input type="text" value={todo} onChange={(e) => {setTodo(e.target.value)}}/>
                <button>Add Todo</button>
            </form>
        </div>
    )

}


export default TodoList;