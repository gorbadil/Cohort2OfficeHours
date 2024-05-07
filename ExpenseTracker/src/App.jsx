import "./App.css";
import { useState, useContext } from "react";
import Parag from "./components/parag/Parag";
import HarcaListe from "./components/harcaListe/HarcaListe";
import HarcaEkle from "./components/HarcaEkle/HarcaEkle";
import GeneralContext from "./context/GeneralContext";

function App() {
  const { harca } = useContext(GeneralContext);
  let tutar = 0;
  harca.forEach((item) => {
    tutar += parseInt(item.amount);
  });

  return (
    <>
      <h1>Merhaba</h1>
      <Parag title="React Harcama Takip Uygulaması" />
      {/* <p>React Harcama Takip Uygulamasına hoşgeldiniz</p> */}
      <h3>Tutar: {tutar} ₺</h3>
      <HarcaListe />
      <HarcaEkle />
      <hr />
    </>
  );
}

export default App;
