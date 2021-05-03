const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
// const REMOVE_TODO = "todos/REMOVE";

let nextId = 1;
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

const initialState = [];
const id = 1;
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        done: state.map(todo => todo.id === id)
          ? { ...todos, done: !todos.done }
          : todos,
      };
    default:
      return state;
  }
}
