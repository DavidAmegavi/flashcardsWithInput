import React from "react";
import "./App.css";
import FlashCardList from "./data/data";
import FlashCardPrototype from "../src/components/Flashcardprototype";

function App() {
  return (
    <div className="App">
      <FlashCardPrototype data={FlashCardList} />
    </div>
  );
}

export default App;
