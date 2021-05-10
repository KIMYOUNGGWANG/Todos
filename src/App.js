import TodosTemplate from "./components/TodosTemplate";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div className="App">
      <TodosTemplate>
        <TodosContainer />
      </TodosTemplate>
    </div>
  );
}

export default App;
