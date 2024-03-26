import { useState } from "react";
import "./App.css";
import Nav from "./nav";

function App() {
  const [mode, setMode] = useState("dark");
  const changeMode = (newMode: string) => {
    setMode(newMode);
    console.log(newMode);
  };
  return (
    <div className={`${mode} h-[100vh] w-[100vw] bg-white dark:bg-[#242424] flex flex-col items-center`}>
      <Nav mode={mode} changeMode={changeMode}/>
      
    </div>
  );
}

export default App;
