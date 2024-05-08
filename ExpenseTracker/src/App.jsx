import "./App.css";
import { useContext, useState, useEffect } from "react";
import Parag from "./components/parag/Parag";
import HarcaListe from "./components/harcaListe/HarcaListe";
import HarcaEkle from "./components/HarcaEkle/HarcaEkle";
import GeneralContext from "./context/GeneralContext";

function App() {
  const { harca, userName, setUserName } = useContext(GeneralContext);
  const [userInput, setUserInput] = useState("");
  let tutar = 0;
  harca.forEach((item) => {
    tutar += parseInt(item.amount);
  });

  const handleUserNameUpdate = () => {
    setUserName(userInput);
    window.localStorage.setItem("userName", userInput);
  };

  useEffect(() => {
    const userName = window.localStorage.getItem("userName");
    if (userName) {
      setUserName(userName);
    }

    // window.addEventListener("scroll", () => {
    //   console.log("scroll event");
    // });

    // return () => {
    //   window.removeEventListener("scroll", () => {
    //     console.log("scroll event removed");
    //   });
    // };
  }, []);

  // useEffect(()=> {}, [])
  // [] => component ilk kez render edildiğinde çalışır
  // [state] => state değiştiğinde çalışır
  // [state, state2] => state veya state2 değiştiğinde çalışır
  // useEffect(functionA() => { return functionB(){} }, [state]) =>
  // state değiştiğinde functionA çalışır
  // ve component unmount olduğunda functionB çalışır

  const handleDeleteUser = () => {
    setUserName("");
    window.localStorage.removeItem("userName");
  };

  if (userName === "") {
    return (
      <div>
        <h1>Lütfen kullanıcı adınızı giriniz</h1>
        <input
          type="text"
          placeholder="İsminizi Giriniz"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <button onClick={handleUserNameUpdate}>Hayırlı olsun</button>
      </div>
    );
  }

  return (
    <>
      <h1>Merhaba {userName} </h1>
      <Parag title="React Harcama Takip Uygulaması" />
      {/* <p>React Harcama Takip Uygulamasına hoşgeldiniz</p> */}
      <h3>Tutar: {tutar} ₺</h3>
      <HarcaListe />
      <HarcaEkle />
      <hr />
      <button onClick={handleDeleteUser}>Kullanıcı Sil</button>
    </>
  );
}

export default App;
