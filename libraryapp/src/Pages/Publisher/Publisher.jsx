import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import axios from "axios";

function Publisher() {
  const [publisher, setPublisher] = useState();
  const [update, setUpdate] = useState(false);
  const [alert, setAlert] = useState(false);

  const [newPublisher, setNewPublisher] = useState({
    name: "",
    establishmentYear: "",
    address: "",
  });

  const [updatePublisher, setUpdatePublisher] = useState({
    name: "",
    establishmentYear: "",
    address: "",
  });

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_APP_BASEURL + "/api/v1/publishers")
      .then((res) => setPublisher(res.data))
      .then(() => setUpdate(true));
  }, [update]);

  const handleNewPublisherInputChange = (e) => {
    const { name, value } = e.target;
    setNewPublisher((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdatePublisherInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatePublisher((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdatePublisher = () => {
    const { id } = updatePublisher;
    axios
      .put(
        `${import.meta.env.VITE_APP_BASEURL}/api/v1/publishers/${id}`,
        updatePublisher
      )
      .then(() => setUpdate(false))
      .then(() =>
        setUpdatePublisher({
          name: "",
          establishmentYear: "",
          address: "",
        })
      )
      .catch(() => {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
      });
  };

  const handleAddNewPublisher = () => {
    // setNewPublisher((prev) => ({
    //   ...prev,
    //   establishmentYear: +prev.establishmentYear,
    // }));
    console.log(newPublisher);
    axios
      .post(
        import.meta.env.VITE_APP_BASEURL + "/api/v1/publishers",
        newPublisher
      )
      .then(() => setUpdate(false))
      .then(() =>
        setNewPublisher({
          name: "",
          establishmentYear: "",
          address: "",
        })
      );
    // .catch(() => {
    //   setAlert(true);
    //   setTimeout(() => {
    //     setAlert(false);
    //   }, 3000);
    // });
  };

  const handleDeletePublisher = (e) => {
    const { id } = e.target;
    axios
      .delete(`${import.meta.env.VITE_APP_BASEURL}/api/v1/publishers/${id}`)
      .then(() => setUpdate(false));
  };

  const handleUpdatePublisherBtn = (e) => {
    const index = e.target.id;
    setUpdatePublisher({ ...publisher[index] });
  };

  return (
    <div>
      <div>
        <h3>Yayımcı Güncelle</h3>
        <br />
        <TextField
          variant="standard"
          type="text"
          name="name"
          placeholder="Yayımcı Adı"
          value={updatePublisher.name}
          onChange={handleUpdatePublisherInputChange}
        />
        <br />
        <br />
        <TextField
          variant="standard"
          type="text"
          name="establishmentYear"
          placeholder="Yayımcı Açıklaması"
          value={updatePublisher.establishmentYear}
          onChange={handleUpdatePublisherInputChange}
        />
        <br />
        <br />
        <TextField
          variant="standard"
          type="text"
          name="address"
          placeholder="Yayımcı Açıklaması"
          value={updatePublisher.address}
          onChange={handleUpdatePublisherInputChange}
        />
        <br />
        <Button
          variant="contained"
          color="success"
          onClick={handleUpdatePublisher}
          startIcon={<DeleteIcon />}
          endIcon={<SendIcon />}
        >
          Yayımcı Güncelle
        </Button>
        {alert && <Alert severity="error">Disko Disko Kola Kola</Alert>}
      </div>
      <div>
        <h3>Yayımcı Ekle</h3>
        <br />
        <TextField
          variant="standard"
          type="text"
          name="name"
          placeholder="Yayımcı Adı"
          value={newPublisher.name}
          onChange={handleNewPublisherInputChange}
        />
        <br />
        <br />
        <TextField
          variant="standard"
          type="text"
          name="establishmentYear"
          placeholder="Yayımcı Yıl"
          value={newPublisher.establishmentYear}
          onChange={handleNewPublisherInputChange}
        />
        <br />
        <br />
        <TextField
          variant="standard"
          type="text"
          name="address"
          placeholder="Yayımcı Adresi"
          value={newPublisher.address}
          onChange={handleNewPublisherInputChange}
        />
        <br />
        <Button
          variant="contained"
          color="error"
          endIcon={<SendIcon />}
          onClick={handleAddNewPublisher}
        >
          Yayımcı Ekle
        </Button>
      </div>
      <hr />
      <hr />
      <hr />
      <ul>
        {publisher?.map((pub, index) => (
          <li key={index}>
            {pub.name} - {pub.establishmentYear} / {pub.address}
            <span onClick={handleDeletePublisher} id={pub.id}>
              {" "}
              DELETE{" "}
            </span>
            -{" "}
            <span onClick={handleUpdatePublisherBtn} id={index}>
              UPDATE
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Publisher;
