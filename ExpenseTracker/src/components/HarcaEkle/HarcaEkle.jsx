import React, { useState, useContext } from "react";
import GeneralContext from "../../context/GeneralContext";
import Parag from "../parag/Parag";

function HarcaEkle() {
  const { harca, setHarca } = useContext(GeneralContext);
  const [harcaName, setHarcaName] = useState("");
  const [harcaAmount, setHarcaAmount] = useState("");
  const [alert, setAlert] = useState(false);
  let tutar = 0;
  harca.forEach((item) => {
    tutar += parseInt(item.amount);
  });

  const handleClick = () => {
    if (tutar + parseInt(harcaAmount) > 1000) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      return;
    } else {
      setHarca((prev) => [
        ...prev,
        { id: prev.length + 1, name: harcaName, amount: harcaAmount },
      ]);
      setHarcaName("");
      setHarcaAmount("");
    }
  };
  return (
    <div>
      <Parag title="Harcama Ekle" />
      <input
        type="text"
        placeholder="Harcama Adı"
        value={harcaName}
        onChange={(e) => setHarcaName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Harcama Tutarı"
        value={harcaAmount}
        onChange={(e) => setHarcaAmount(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Harca</button>

      {alert && <p>Toplam harcama 1000 ₺'yi aşamaz</p>}
      {/* {alert ? <p>Toplam harcama 1000 ₺'yi aşamaz</p> : null} */}
    </div>
  );
}

export default HarcaEkle;
