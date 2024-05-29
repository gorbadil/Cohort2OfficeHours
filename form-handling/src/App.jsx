import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [bodyObj, setBodyObj] = useState({
    name: "",
    title: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleSendData = () => {
    axios
      .post("https://dummyjson.com/products/add", bodyObj)
      .then((res) => console.log(res));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBodyObj({
      ...bodyObj,
      [name]: value,
    });
    if (name === "name" && value.length > 3) {
      axios
        .get(`https://dummyjson.com/products/search?q=${value}`)
        .then((res) => console.log(res.data));
    }
  };

  return (
    <>
      <div>
        <h4>Inputs</h4>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={bodyObj.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={bodyObj.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={bodyObj.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={bodyObj.password}
          onChange={handleInputChange}
        />
        <select
          name="gender"
          value={bodyObj.gender}
          onChange={handleInputChange}
        >
          <option value="Male" hidden selected>
            Select
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <h4>Results</h4>
        <p>Name: {bodyObj.name} </p>
        <p>Title: {bodyObj.title} </p>
        <p>Email: {bodyObj.email} </p>
        <p>Pass: {bodyObj.password} </p>
        <p>Gender: {bodyObj.gender} </p>
      </div>
      <button onClick={handleSendData}>Send Data</button>
    </>
  );
}

export default App;

// {
//   1:
//   2:
//   3:
//   4: request ("URL") + BODY({})
//   5:
//   6:
//   7:
// }

// GET = URL => güvenlik açığı

// POST = URL + BODY => güvenlik (create element)
// // BODY = {
// // // name: "",
// // // title: "",
// // }
// 500 => BODY backend ile uyumlu değil
// 404 => URL

// PUT = URL(:id) + BODY => güvenlik (update element)
// // BODY = {
// // // title: "",
// // }

// PATCH = URL(:id) + BODY => güvenlik (update element)
// // BODY = {
// title: "",
// // }

// DELETE = URL(:id) => güvenlik açığı (delete element)

// URL açık olma sebebi => önce DNS(URL) => URL + BODY gerçek server (HTTPS)
