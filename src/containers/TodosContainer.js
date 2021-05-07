import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import todoSlide from "../modules/todos";
const TodosContainer = () => {
  const todos = useSelector(state => state.todos);
  console.log(todos)
  const dispatch = useDispatch();
  const onCreate = useCallback(text => dispatch(todoSlide.actions.addTodo(text)), [dispatch]);
  const onToggle = useCallback(id => dispatch(todoSlide.actions.toggleTodo(id)), [dispatch]);
  const onRemove = useCallback(id => dispatch(todoSlide.actions.removeTodo(id)), [dispatch]);
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
