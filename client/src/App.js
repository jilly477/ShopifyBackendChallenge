import './App.css';
import React from "react";

//components
import InputItem from "./components/InputItem";
import ListItems from "./components/ListItems";
import ListLocations from "./components/ListLocations";
import InputLocation from "./components/InputLocation";

function App() {
  return (
    <div>
      <div className="container">
        <InputItem></InputItem>
        <ListItems tableName="inventory"/>
        <InputLocation/>
        <ListLocations tableName="locations"/>
      </div>
    </div>
  );
}

export default App;
