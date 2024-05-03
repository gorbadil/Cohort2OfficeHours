import "./App.css";
import Counter from "./CounterApp/Counter";
export default App;
import ReactMeme from "./assets/maxresdefault.jpg";

function App() {
  return (
    <div>
      <h1>Cohort 2</h1>
      <Counter />
      <img src={ReactMeme} alt="" />
    </div>
  );
}
