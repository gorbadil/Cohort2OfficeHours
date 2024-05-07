import React from "react";
import Parag from "../parag/Parag";
import ListItem from "../ListItem/ListItem";

function HarcaListe() {
  return (
    <div>
      <Parag title="Harcama Listesi" />
      {/* <p>Harcama Listesi</p> */}
      <ul>
        <ListItem />
        {/* <li>Çiçek: 100 ₺</li>
        <li>Kitap: 200 ₺</li>
        <li>Kalem: 20 ₺</li> */}
      </ul>
    </div>
  );
}

export default HarcaListe;
