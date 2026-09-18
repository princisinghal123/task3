import {useState} from "react";
import Header from "./Header";
import {createElement} from "react";
import "./App.css";
function App() {
const username="princi singhal";
let a=12;
let b=2;
const cards = [

    { id: 1, value: "flower🌹", type: "normal" },

    { id: 2, value: "cake🎂", type: "normal" },

    { id: 3, value: "gift🎁", type: "normal" },

    { id: 4, value: "balloon🎈", type: "normal" },

    { id: 5, value: "sun☀️", type: "normal" },

    { id: 6, value: "sun☀️", type: "normal" },

    { id: 7, value: "balloon🎈", type: "normal" },
    { id: 8, value: "gift🎁", type: "normal" },

    { id: 9, value: "cake🎂", type: "normal" },

    { id: 10, value: "flower🌹", type: "normal" },

    { id: 11, value: "💣", type: "bomb" },

    { id: 12, value: "⏰", type: "time" }
  ];
  return (
    <div className="App">
      <Header/>
      <h1>memory game {a+b}</h1>
      <h2>find matching pairs</h2>
      <h3>username is : { username}</h3>
      <p>availability time:{" 24 x 7"}</p>
      <br></br>
      {createElement("h2",{id:"rootDiv"},"start the game")}
      <br></br>
      
    
      <h3>12 memory cards are:</h3>

      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            {card.value}
          </div>
        ))}
      </div>
      
      <br></br>
      <button onclick={()=>alert("hello")} id="button">start</button>
      <br></br>
    </div>

  );
}

export default App;