import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/animal/1");
      const data = await response.json();
      setFile(data);
    };
    fetchData();
    console.log(file);
  }, []);
  return (
    <>
      {/* {file &&
        file.map((item) => (
          <>
            <p>{item.name}</p>
            <p>{item.species}</p>
          </>
        ))} */}
      {file && (
        <>
          <p>{file.name}</p>
          <p>{file.species}</p>
        </>
      )}
    </>
  );
}

export default App;
