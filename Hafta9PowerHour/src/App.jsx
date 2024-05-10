// import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import User from "./components/User";

function App() {
  // const [page, setPage] = useState("Home");

  // const handleClick = (e) => {
  //   const id = e.target.id;
  //   setPage(id);
  // };

  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li id="Home">
              <NavLink to="/" exact activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li id="Contacts">
              <NavLink to="/contacts" activeClassName="selected">
                Contacts
              </NavLink>
            </li>
            <li id="User">
              <NavLink to="/user" activeClassName="selected">
                User
              </NavLink>
            </li>
            <li id="About">
              <NavLink to="/about" activeClassName="selected">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* {page === "Home" && <Home />}
      {page === "About" && <About />}
      {page === "Contacts" && <Contacts />} */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
