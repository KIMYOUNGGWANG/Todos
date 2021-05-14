import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.scss";
const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <div className="TodoList">
      {todos.addTodoLoading && "...로딩중" }
      {todos?.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TodoList;
