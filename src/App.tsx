import React from "react";
import "./App.css";
import { Album } from "./views/Album";
//import { TextField } from "./components/TextField";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <TextField
        handleChange={(e) => console.log(e.target.value)}
        text="Typescript tes"
      /> */}
      <Album />
    </div>
  );
};

export default App;
