import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [saludo, setSaludo] = useState("");
  useEffect(() => {
    setSaludo("¡Hello World! 😄");
  }, []);
  return (
    <div className="container">
      <h1 className="saludo"> Hello World App</h1>
      <p className="saludo-2"> {saludo} </p>
    </div>
  );
}

export default App;
