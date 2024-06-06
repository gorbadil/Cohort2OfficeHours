import { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [animals, setAnimals] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [reload, setReload] = useState(false);
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    species: "",
    breed: "",
    gender: "",
    dateOfBirth: "",
    colour: "",
    customer: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data.content));
    fetch("http://localhost:8080/api/v1/animals")
      .then((res) => res.json())
      .then((data) => setAnimals(data.content));
  }, [reload]);

  const handleClick = () => {
    axios
      .post("http://localhost:8080/api/v1/animals", newAnimal)
      .then((data) => console.log(data))
      .then(() => setReload(!reload));
  };

  const handleInputChange = (e) => {
    setNewAnimal({
      ...newAnimal,
      [e.target.name]: e.target.value,
    });
    console.log(newAnimal);
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    const obj = customers.find((customer) => customer.id === +value);
    setNewAnimal({
      ...newAnimal,
      [name]: obj,
    });
  };

  return (
    <>
      <h1>Add New Animal</h1>
      <input
        onChange={handleInputChange}
        value={newAnimal.name}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        onChange={handleInputChange}
        value={newAnimal.species}
        type="text"
        name="species"
        placeholder="Species"
      />
      <input
        onChange={handleInputChange}
        value={newAnimal.breed}
        type="text"
        name="breed"
        placeholder="Breed"
      />
      <input
        onChange={handleInputChange}
        value={newAnimal.gender}
        type="text"
        name="gender"
        placeholder="M/F"
      />
      <input
        onChange={handleInputChange}
        value={newAnimal.dateOfBirth}
        type="date"
        name="dateOfBirth"
        placeholder="YYYY-MM-DD"
      />
      <input
        onChange={handleInputChange}
        value={newAnimal.colour}
        type="text"
        name="colour"
        placeholder="Colour"
      />
      <select
        name="customer"
        value={newAnimal.customer.id || ""}
        onChange={handleSelectChange}
      >
        <option value="">Select Customer</option>
        {customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.name}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Add</button>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>
            {animal.name} - {animal.species}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
