import React, { useState } from "react";

function AddTodo(props) {
  const [inputText, setInputText] = useState("");
  function updateInputText(event){
    setInputText(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    props.setTodos([
      {id: Math.random()*1000 , text: inputText, completed: false},
      ...props.todos
    ]);
    setInputText("");
  }

  return (
    <div className="AddTodo todo">
      <form onSubmit={handleSubmit}>
        <input
          value={inputText}
          type="text"
          placeholder="Enter a todo"
          autoFocus="on"
          onChange={updateInputText}
        />
      </form>
    </div>
  );
}

export default AddTodo;
