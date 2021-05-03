import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, removeTodo, toggleTodo } from "../modules/todos";

const TodosContainer = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const onCreate = useCallback(text => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);
  const onRemove = useCallback(id => dispatch(removeTodo(id)), [dispatch]);
  return (
    <Todos
      todos={todos}
      onCreate={onCreate}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodosContainer;
