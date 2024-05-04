import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import "./App.css";
import Nav from "./components/nav.tsx";
import Home from "./components/Home.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Contact from "./components/contact.tsx";
import Footer from "./components/Footer.tsx";
function App() {
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const contactsRef = useRef(null);
    const onScrollAboutMe = () => {
        aboutMeRef.current.scrollIntoView({
            behavior: "smooth",
        });
    };
    const onScrollProjects = () => {
        projectsRef.current.scrollIntoView({
            behavior: "smooth",
        });
    };
    const onScrollContacts = () => {
        contactsRef.current.scrollIntoView({
            behavior: "smooth",
        });
    };
    const [mode, setMode] = useState("dark");
    const changeMode = (newMode) => {
        setMode(newMode);
        console.log(newMode);
    };
    return (_jsxs("div", { className: `${mode} no-scrollbar overflow-auto h-[100vh] w-[100vw] bg-white dark:bg-[#242424] grid grid-flow-row items-center`, children: [_jsx(Nav, { mode: mode, changeMode: changeMode, onScrollAboutMe: onScrollAboutMe, onScrollProjects: onScrollProjects, onScrollContact: onScrollContacts }), _jsx("hr", { className: " w-full dark:bg-white bg-black shadow-xl" }), _jsx(Home, { onScrollProjects: onScrollProjects }), _jsx(AboutMe, { ref: aboutMeRef }), _jsx(Projects, { ref: projectsRef }), _jsx(Contact, { ref: contactsRef }), _jsx(Footer, {})] }));
}
export default App;
