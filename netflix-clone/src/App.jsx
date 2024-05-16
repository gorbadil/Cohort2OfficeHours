import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Row from "./components/Row/Row";
import { rows } from "./helper/Rows";
import reactImage from "../public/viteImage.png"



function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      {rows.map(row => (
        <Row 
        key={row.id} 
        title={row.title} 
        fetchURL={row.fetchURL} 
        id={row.id} />
      ))}
    </div>
  );
}

export default App;
