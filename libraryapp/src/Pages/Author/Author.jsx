import { useEffect, useState } from "react";
import axios from "axios";

function Author() {
  const [author, setAuthor] = useState([]);
  const [update, setUpdate] = useState(false);
  const [newAuthor, setNewAuthor] = useState({
    name: "",
    birthDate: "",
    country: "",
  });
  const [updateAuthor, setUpdateAuthor] = useState({
    name: "",
    birthDate: "",
    country: "",
  });
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_APP_BASEURL + "/api/v1/authors")
      .then((res) => setAuthor(res.data))
      .then(() => console.log(author))
      .then(() => setUpdate(true));
  }, [update]);

  const handleNewAuthorInputChange = (e) => {
    const { name, value } = e.target;
    setNewAuthor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddNewAuthor = () => {
    axios
      .post(import.meta.env.VITE_APP_BASEURL + "/api/v1/authors", newAuthor)
      .then((res) => console.log(res))
      .then(setUpdate(false))
      .then(
        setNewAuthor({
          name: "",
          birthDate: "",
          country: "",
        })
      );
  };

  const handleDeleteAuthor = (e) => {
    const { id } = e.target;
    axios
      .delete(`${import.meta.env.VITE_APP_BASEURL}/api/v1/authors/${id}`)
      .then(() => setUpdate(false));
  };

  const handleUpdateAuthor = () => {
    const { id } = updateAuthor;
    axios
      .put(
        `${import.meta.env.VITE_APP_BASEURL}/api/v1/authors/${id}`,
        updateAuthor
      )
      .then(() => setUpdate(false))
      .then(() => setUpdateAuthor({ name: "", birthDate: "", country: "" }));
  };

  const handleUpdateAuthorInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateAuthor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateAuthorBtn = (e) => {
    const index = e.target.id;
    setUpdateAuthor({ ...author[index] });
  };

  return (
    <>
      <div>
        <h3>Update Author</h3>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={updateAuthor.name}
          onChange={handleUpdateAuthorInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Birth Date"
          name="birthDate"
          value={updateAuthor.birthDate}
          onChange={handleUpdateAuthorInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Country"
          name="country"
          value={updateAuthor.country}
          onChange={handleUpdateAuthorInputChange}
        />
        <br />
        <br />
        <button onClick={handleUpdateAuthor}>Update Author</button>
      </div>
      <div>
        <h3>Add New Author</h3>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newAuthor.name}
          onChange={handleNewAuthorInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Birth Date"
          name="birthDate"
          value={newAuthor.birthDate}
          onChange={handleNewAuthorInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Country"
          name="country"
          value={newAuthor.country}
          onChange={handleNewAuthorInputChange}
        />
        <br />
        <br />
        <button onClick={handleAddNewAuthor}>Add New Author</button>
      </div>
      <hr />
      <p>
        {" "}
        {newAuthor.name} - {newAuthor.country} - {newAuthor.birthDate}{" "}
      </p>
      <hr />
      <ul>
        {author?.map((auth, index) => (
          <li key={index}>
            {auth.name} -{auth.country} -{auth.birthDate} -
            <span onClick={handleDeleteAuthor} id={auth.id}>
              {" "}
              DELETE{" "}
            </span>
            -{" "}
            <span onClick={handleUpdateAuthorBtn} id={index}>
              UPDATE
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Author;
