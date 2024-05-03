import React from "react";
import CounterBtn from "./CounterBtn";
import { useContext } from "react";
import CounterContext from "../context/Context";

function Counter3() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      Counter3 Sayı: {count}
      <CounterBtn />
    </div>
  );
}

export default Counter3;
