import { createContext, useState } from "react";

const GeneralContext = createContext();

export default GeneralContext;

export function GeneralProvider({ children }) {
  const [userName, setUserName] = useState("");

  const [harca, setHarca] = useState([
    { id: 1, name: "Çiçek", amount: 100 },
    { id: 2, name: "Kitap", amount: 200 },
    { id: 3, name: "Kalem", amount: 20 },
  ]);

  const data = { harca, setHarca, userName, setUserName };

  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
}
