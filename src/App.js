import TodosTemplate from "./components/TodosTemplate";
import SampleContainer from "./containers/SampleContainer";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div className="App">
      {/* <TodosTemplate>
        <TodosContainer />
      </TodosTemplate> */}
      <SampleContainer/>
    </div>
  );
}

export default App;
