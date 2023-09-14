import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ task, id: uuidv4() });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="task" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="New Todo" 
      />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
