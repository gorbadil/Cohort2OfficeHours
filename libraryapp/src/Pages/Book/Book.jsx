import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import axios from "axios";

function Book() {
  const initState = {
    id: "",
    name: "",
    publicationYear: "",
    stock: "",
    author: {},
    publisher: {},
    categeries: [],
  };
  const [book, setBook] = useState();
  const [author, setAuthor] = useState();
  const [publisher, setPublisher] = useState();
  const [category, setCategory] = useState();
  const [update, setUpdate] = useState(false);
  const [newBook, setNewBook] = useState({
    ...initState,
  });
  const [updateBook, setUpdateBook] = useState({
    ...initState,
  });

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_APP_BASEURL + "/api/v1/books")
      .then((res) => setBook(res.data))
      .then(() => setUpdate(true));
    axios
      .get(import.meta.env.VITE_APP_BASEURL + "/api/v1/authors")
      .then((res) => setAuthor(res.data))
      .then(() => setUpdate(true));
    axios
      .get(import.meta.env.VITE_APP_BASEURL + "/api/v1/publishers")
      .then((res) => setPublisher(res.data))
      .then(() => setUpdate(true));
    axios
      .get(import.meta.env.VITE_APP_BASEURL + "/api/v1/categories")
      .then((res) => setCategory(res.data))
      .then(() => setUpdate(true));
  }, [update]);

  const handleNewBookInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(newBook);
  };

  const handleAuthorSelectChange = (e) => {
    const id = e.target.value;
    const newAuthor = author.find((a) => a.id === +id);
    setNewBook((prev) => ({
      ...prev,
      author: newAuthor,
    }));
    console.log(newBook);
  };

  const handlePublisherSelectChange = (e) => {
    const id = e.target.value;
    const newPublisher = publisher.find((p) => p.id === +id);
    setNewBook((prev) => ({
      ...prev,
      publisher: newPublisher,
    }));
    console.log(newBook);
  };

  const handleCategorySelectChange = (e) => {
    const cat = category.find((c) => c.id === +e.target.value);
    if (e.target.checked) {
      setNewBook((prev) => ({
        ...prev,
        categeries: [...prev.categeries, cat],
      }));
    } else {
      setNewBook((prev) => ({
        ...prev,
        categeries: prev.categeries.filter((c) => c.id !== cat.id),

        // nums = [0,1,2,3]
        // nums = nums.filter(num => num !==3) => [0,1,2]
      }));
    }
  };

  const handleAddNewBook = () => {
    axios
      .post(import.meta.env.VITE_APP_BASEURL + "/api/v1/books", newBook)
      .then(() => setUpdate(false))
      .then(() => setNewBook({ ...initState }));
  };

  return (
    <div>
      <div>
        <h3>Kitap Ekle</h3>
        <TextField
          label="Kitap Adı"
          variant="standard"
          name="name"
          value={newBook.name}
          onChange={handleNewBookInputChange}
        />
        <TextField
          label="Yayın Yılı"
          variant="standard"
          name="publicationYear"
          value={newBook.publicationYear}
          onChange={handleNewBookInputChange}
        />
        <TextField
          label="Stok"
          variant="standard"
          name="stock"
          value={newBook.stock}
          onChange={handleNewBookInputChange}
        />
        <Select
          labelId="Author"
          id="AuthorSelect"
          value={newBook.author.id || ""}
          label="Age"
          onChange={handleAuthorSelectChange}
        >
          {author?.map((au, index) => (
            <MenuItem key={index} value={au.id}>
              {au.name}
            </MenuItem>
          ))}
        </Select>
        <Select
          labelId="Author"
          id="AuthorSelect"
          value={newBook.publisher.id || ""}
          label="Age"
          onChange={handlePublisherSelectChange}
        >
          {publisher?.map((pb, index) => (
            <MenuItem key={index} value={pb.id}>
              {pb.name}
            </MenuItem>
          ))}
        </Select>
        <div>
          <h6>Kategoriler</h6>
          {category?.map((cat, index) => (
            <div key={index}>
              <Checkbox
                checked={newBook?.categeries?.some((c) => c.id === cat.id)}
                value={cat.id}
                onChange={handleCategorySelectChange}
              />
              {cat.name}
            </div>
          ))}
        </div>
        <Button onClick={handleAddNewBook}>Kitap Ekle</Button>
      </div>
      <ul>
        {book?.map((bo, index) => (
          <li key={index}>
            {bo.name} - {bo.publicationYear} /<span> DELETE </span>-{" "}
            <span>UPDATE</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Book;
