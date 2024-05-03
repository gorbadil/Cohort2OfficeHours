import { createContext, useState } from "react";

const CounterContext = createContext();

export default CounterContext;

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Cohort 2");
  const data = { count, setCount, name, setName };

  return (
    <CounterContext.Provider value={data}>{children}</CounterContext.Provider>
  );
}
