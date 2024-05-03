import { createContext } from "react";
import { useState } from "react";

const NameContext = createContext();

export default NameContext;

export function NameProvider({ children }) {
  const [newName, setNewName] = useState("Ersin Mutlu");

  const data = { newName, setNewName };
  return <NameContext.Provider value={data}>{children}</NameContext.Provider>;
}
