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
        <div className="App">
            <h1>TODO LIST</h1>
            {todos.map((todo) => 
            <div key={todo.id}>
                <div>
                    {editId === todo.id ? 
                        (<input type="text"  onChange={(e) => setEditText(e.target.value)} value={editText}/>) 
                        : 
                        (<h3>{todo.text}</h3>)}
                    {" "}
                    <div className="ui buttons">
                        <button onClick={deleteTodo.bind(this,todo.id)} className="ui negative button">Delete</button>
                        <div className="or"></div>
                        {editId === todo.id ? 
                            (<button onClick={editTodo.bind(this,todo.id)} className="ui button">Submit Edit</button>) 
                            : 
                            (<button onClick={()=>setEditId(todo.id)} className="ui button">Edit</button>)}
                    </div>
                    {" "}
                    <div className="ui checked checkbox">
                        <input type="checkbox" onChange={statusTodo.bind(this,todo.id)} checked={todo.status}/>
                        <label>{todo.status ? ("Selesai") : ("Belum Selesai")}</label>
                        {console.log(todo.status)}
                    </div>
                    {console.log(editId)}
                </div>
            </div>)}
            <br/>
            <form onSubmit={addTodo}>
                <div className="ui input">
                    <input type="text" value={todo} onChange={(e) => {setTodo(e.target.value)}} placeholder="Nama Todo"/>
                </div>
                <button className="ui button">Add Todo</button>
            </form>
        </div>
    )

}


export default TodoList;