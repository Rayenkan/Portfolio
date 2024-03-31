import { useState } from "react";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("dark");
  const changeMode = (newMode: string) => {
    setMode(newMode);
    console.log(newMode);
  };
  return (
    <div className={`${mode} no-scrollbar overflow-auto h-[100vh] w-[100vw] bg-white dark:bg-[#242424] grid grid-flow-row items-center`}>
      <Nav mode={mode} changeMode={changeMode}/>
      <hr className=" w-full dark:bg-white bg-black shadow-xl" />
      <Home />
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
