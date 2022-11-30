import React from "react";
import { Greetings } from "./Components/Greetings";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";

function App() {
  return (
    <Header>
      <Greetings />
      <Main />
    </Header>
  );
}

export default App;
