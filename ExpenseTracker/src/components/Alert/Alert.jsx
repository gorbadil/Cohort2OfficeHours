import React, { useEffect } from "react";
import "./Alert.css";

function Alert({ color, message }) {
  useEffect(() => {
    console.log("Alert Component did mount");

    return () => {
      console.log("Alert Component will unmount");
    };
  }, []);

  return <p className={color === "red" ? "red" : "green"}> {message} </p>;
}

export default Alert;
