import React from "react";
import {Navbar} from "./components/Navbar";
import {Route, Routes} from "react-router";
import {NotFound} from "./pages/NotFound";
import {HomePage} from "./pages/HomePage";
import {BlogPage} from "./pages/BlogPage";
import {LoginPage} from "./pages/LoginPage";
import {ProfilePage} from "./pages/ProfilePage";
import {CreatePage} from "./pages/CreatePage";
import {SearchPage} from "./pages/SearchPage";
<<<<<<< HEAD
import Footer from "./components/footer";
import { Switch } from "@mui/material";
import { createContext, useState } from "react";
export const ThemeContext = createContext(null);


=======
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> 0e4db4609b5b994e912d40f97c04ced782ed0ec8

function App() {
    // if(localStorage.getItem("theme")==null)
    //     localStorage.setItem("theme","light")

    // const changeTheme = (event)=>{
    //     let theme = localStorage.getItem("theme")
    //     if((theme==="dark")!==event.target.checked){
    //         if(theme==="dark"){
    //             theme = "light"
    //         }
    //         else{
    //             theme = "dark"
    //         }
    //         localStorage.setItem("theme",theme)
    //     }
    //     console.log(localStorage.getItem("theme"))
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
        };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
            <Navbar />
            <Switch onChange={toggleTheme} checked={theme === "dark"} className="m-[10px] sm:m-0" />
            <Routes>
                <Route index element={<HomePage />} />
                <Route exact path="/home" element={<HomePage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/blog/:id" element={<BlogPage />} />
                <Route exact path="/create" element={<CreatePage/>} />
                <Route exact path="/user/:username" element={<ProfilePage />} />
                <Route exact path="/search" element={<SearchPage />} />
                <Route exact path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
            <ToastContainer/>
        </div>
        </ThemeContext.Provider>
    );
}

export default App;