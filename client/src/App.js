import React from "react";
import Form from "./components/Form"
import Navbar from "./components/Navbar";
import Card from "./components/Card"


function App() {
  return (
    <div className="container">
      <Navbar />
      <Form/>
      <Card/>

    </div>
  );
}

export default App;
