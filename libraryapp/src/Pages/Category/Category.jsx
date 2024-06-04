import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import axios from "axios";

function Category() {
  const [category, setCategory] = useState();
  const [update, setUpdate] = useState(false);

  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });

  const [updateCategory, setUpdateCategory] = useState({
    id: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_APP_BASEURL + "/api/v1/categories")
      .then((res) => setCategory(res.data))
      .then(() => setUpdate(true));
  }, [update]);

  const handleNewCategoryInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateCategory = () => {
    const { id } = updateCategory;
    axios
      .put(
        `${import.meta.env.VITE_APP_BASEURL}/api/v1/categories/${id}`,
        updateCategory
      )
      .then(() => setUpdate(false))
      .then(() =>
        setUpdateCategory({
          id: "",
          name: "",
          description: "",
        })
      );
  };

  const handleUpdateCategoryInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateCategoryBtn = (e) => {
    const index = e.target.id;
    // const newCteg = category.find((categ)=> categ.id === id)
    setUpdateCategory({ ...category[index] });
  };

  const handleAddNewCategory = () => {
    axios
      .post(
        import.meta.env.VITE_APP_BASEURL + "/api/v1/categories",
        newCategory
      )
      .then((res) => console.log(res))
      .then(() => setUpdate(false))
      .then(() =>
        setNewCategory({
          name: "",
          description: "",
        })
      );
  };

  const handleDeleteCategory = (e) => {
    const { id } = e.target;
    axios
      .delete(`${import.meta.env.VITE_APP_BASEURL}/api/v1/categories/${id}`)
      .then(() => setUpdate(false));
  };

  return (
    <div>
      <div>
        <h3>Kategori Güncelle</h3>
        <br />
        <TextField
          variant="standard"
          type="text"
          name="name"
          placeholder="Kategori Adı"
          value={updateCategory.name}
          onChange={handleUpdateCategoryInputChange}
        />
        <br />
        <br />
        <TextField
          variant="standard"
          type="text"
          name="description"
          placeholder="Kategori Açıklaması"
          value={updateCategory.description}
          onChange={handleUpdateCategoryInputChange}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="success"
          onClick={handleUpdateCategory}
          startIcon={<DeleteIcon />}
          endIcon={<SendIcon />}
        >
          Kategori Güncelle
        </Button>
      </div>
      <div>
        <h3>Kategori Ekle</h3>
        <br />
        <TextField
          variant="standard"
          type="text"
          name="name"
          placeholder="Kategori Adı"
          value={newCategory.name}
          onChange={handleNewCategoryInputChange}
        />
        <br />
        <br />
        <TextField
          variant="standard"
          type="text"
          name="description"
          placeholder="Kategori Açıklaması"
          value={newCategory.description}
          onChange={handleNewCategoryInputChange}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="error"
          endIcon={<SendIcon />}
          onClick={handleAddNewCategory}
        >
          Kategori Ekle
        </Button>
      </div>
      <hr />
      <hr />
      <hr />
      <ul>
        {category?.map((categ, index) => (
          <li key={index}>
            {categ.name} - {categ.description} /
            <span onClick={handleDeleteCategory} id={categ.id}>
              {" "}
              DELETE{" "}
            </span>
            -{" "}
            <span onClick={handleUpdateCategoryBtn} id={index}>
              UPDATE
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;

// docker-compose up --build
