import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";
// import Products from "./pages/Products";
// import Basket from "./pages/Basket";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Products />} /> */}
        {/* <Route path="/basket" element={<Basket />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
