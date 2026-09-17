import Header,{settings,profile} from "./Header";
import {createElement} from "react";
import "./App.css";
function App() {
const username="princi singhal";
let a=27;
let b=7;
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
      <button onclick={()=>alert("hello")} id="button">start</button>
    </div>
  );
}
export default App;
