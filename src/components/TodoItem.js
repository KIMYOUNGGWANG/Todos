import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import "./TodoItem.scss";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div
        className={cn("checkbox", { checked })}
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
        onClick={() => onToggle(todo.id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div>{todo.text}</div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
