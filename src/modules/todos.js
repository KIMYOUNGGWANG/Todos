const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const REMOVE_TODO = "todos/REMOVE";

let nextId = 1;
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
    done: false,
  },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
});

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === nextId ? { ...todo, done: !todo.done } : todo
      );

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== nextId);
    default:
      return state;
  }
}
