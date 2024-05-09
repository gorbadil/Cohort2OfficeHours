import { createContext, useContext, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const data = { basket, setBasket };
  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
