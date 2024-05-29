import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Author from "./Pages/Author/Author";
import Publisher from "./Pages/Publisher/Publisher";
import Navbar from "./Components/Navbar/Navbar";
import Category from "./Pages/Category/Category";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/author" element={<Author />} />
          <Route path="/publisher" element={<Publisher />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
