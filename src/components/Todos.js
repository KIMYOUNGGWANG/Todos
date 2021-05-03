import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import "./Todos.scss";
const Todos = ({ todos, onCreate, onToggle, onRemove }) => {
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };
  return (
    <div>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input
          value={text}
          onChange={onChange}
          placeholder="할 일을 입력하세요..."
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </div>
  );
};

export default Todos;
