import React, { useState, useContext } from "react";
import GeneralContext from "../../context/GeneralContext";
import Parag from "../parag/Parag";
import Alert from "../Alert/Alert";

function HarcaEkle() {
  const { harca, setHarca } = useContext(GeneralContext);

  // const [harcaName, setHarcaName] = useState("");
  // const [harcaAmount, setHarcaAmount] = useState("");

  const [harcama, setHarcama] = useState({
    name: "",
    amount: "",
  });
  const [alert, setAlert] = useState(0);

  let tutar = 0;
  harca.forEach((item) => {
    tutar += parseInt(item.amount);
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setHarcama((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {
    // if (tutar + parseInt(harcaAmount) > 1000) {
    //   setAlert(true);
    //   setTimeout(() => {
    //     setAlert(false);
    //   }, 3000);
    //   return;
    // } else {
    // setHarca((prev) => [
    //   ...prev,
    //   { id: prev.length + 1, name: harcaName, amount: harcaAmount },
    // ]);
    // setHarcaName("");
    // setHarcaAmount("");
    // }

    if (tutar + parseInt(harcama.amount) > 1000) {
      setAlert(1);
      setTimeout(() => {
        setAlert(0);
      }, 3000);
      return;
    } else {
      setAlert(2);
      setTimeout(() => {
        setAlert(0);
      }, 3000);
      setHarca((prev) => [...prev, { id: prev.length + 1, ...harcama }]);
      setHarcama({ name: "", amount: "" });
    }
  };
  return (
    <div>
      <Parag title="Harcama Ekle" />
      <input
        type="text"
        placeholder="Harcama Adı"
        value={harcama.name}
        // onChange={(e) => setHarcaName(e.target.value)}
        name="name"
        onChange={handleOnChange}

        // const { name, value } = e.target;
        // setHarcama((prev) => ({
        //   ...prev,
        //   [name]: value,
        // }));
      />
      <br />
      <input
        type="text"
        placeholder="Harcama Tutarı"
        value={harcama.amount}
        // onChange={(e) => setHarcaAmount(e.target.value)}
        name="amount"
        onChange={handleOnChange}
      />
      <br />
      <button onClick={handleClick}>Harca</button>

      {/* {alert && <p>Toplam harcama 1000 ₺'yi aşamaz</p>} */}
      {/* {alert ? <p>Toplam harcama 1000 ₺'yi aşamaz</p> : null} */}
      {alert === 1 ? (
        <Alert color="red" message="Toplam harcama 1000 ₺'yi aşamaz" />
      ) : alert === 2 ? (
        <Alert color="green" message="Harcama başarılı" />
      ) : null}
    </div>
  );
}

export default HarcaEkle;
