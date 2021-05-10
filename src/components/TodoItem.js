import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import "./TodoItem.scss";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  const { id, done,text } = todo;
  return (
    <div className="TodoListItem">
      <div
        className={cn("checkbox", { done })}
        style={{ textDecoration: done ? "line-through" : "none" }}
        onClick={() => onToggle(id)}
      >
        {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div>{text}</div>

      </div>
      <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
    </div>
  );
};
export default TodoItem;
