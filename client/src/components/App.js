import React from "react";
import "../main.css";
import "./cards/card.css";
import Form from "./form/Form";
import Cards from "./cards/Cards";
import Header from "./header/Header";
import Error from "./Error";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Error />
      <Form />
      <Cards />
    </>
  );
}

export default App;
