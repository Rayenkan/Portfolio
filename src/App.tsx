import { useState } from "react";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/Home";

function App() {
  const [mode, setMode] = useState("dark");
  const changeMode = (newMode: string) => {
    setMode(newMode);
    console.log(newMode);
  };
  return (
    <div className={`${mode} h-[100vh] w-[100vw] bg-white dark:bg-[#242424] flex flex-col items-center`}>
      <Nav mode={mode} changeMode={changeMode}/>
      <hr className=" w-full dark:bg-white bg-black shadow-xl" />
      <Home/>
    </div>
  );
}

export default App;
