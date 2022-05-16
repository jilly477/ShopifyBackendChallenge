import './App.css';
import React from "react";

//components
import InputItem from "./components/InputItem";
import ListItems from "./components/ListItems";

function App() {
  return (
    <div>
      <div className="container">
        <InputItem></InputItem>
        <ListItems></ListItems>
      </div>
    </div>
  );
}

export default App;
