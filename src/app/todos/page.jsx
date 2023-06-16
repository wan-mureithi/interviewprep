"use client";
import React, { useState } from "react";

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 5; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
}

const index = () => {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");

  const handleRemove = (id) => {
   
    setTodos( todos.filter(function (item) {
        return item.id !== id;
    }))
  }
  return (
    <div>
      <div>
        <h1>To do things</h1>
      </div>
      <br />
      <div>
       <div style={{ display: 'flex', marginBottom:'15px'}}>
       <input value={text} onChange={(e) => setText(e.target.value)} />
        
        <button
          onClick={() => {
            setText("");
            setTodos([
              {
                id: todos.length,
                text: text,
              },
              ...todos,
            ]);
          }}
        >
          Add
        </button>
       </div>
        <br/>
        <table>
          <tr>
            <th>Number</th>
            <th>Item</th>
            <th>Action</th>
          </tr>

          {todos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.text}</td>
              <td><button onClick={() => handleRemove(item.id)} > Delete </button></td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default index;
