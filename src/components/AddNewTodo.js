import React, { useState } from "react";

const AddNewTodo = ({newTodo}) => {
    const [baru, setBaru] = useState('');

    const handleNewTodo = (e) => {
        e.preventDefault();
        newTodo(baru);
    }

    return(
        <form onSubmit={handleNewTodo}>
            <input type="text" onChange={(e) => setBaru(e.target.value)} />
            <input type="submit" />
        </form>
    )

}

export default AddNewTodo;