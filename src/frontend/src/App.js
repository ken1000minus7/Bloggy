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
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createContext, useState } from "react";
export const ThemeContext = createContext(null);

function App() {

    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
        };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            
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