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


function App() {
    if(localStorage.getItem("theme")==null)
        localStorage.setItem("theme","light")

    const changeTheme = (event)=>{
        let theme = localStorage.getItem("theme")
        if((theme==="dark")!==event.target.checked){
            if(theme==="dark"){
                theme = "light"
            }
            else{
                theme = "dark"
            }
            localStorage.setItem("theme",theme)
        }
        console.log(localStorage.getItem("theme"))
    }
    return (
        <div className="App">
            <Navbar changeTheme={changeTheme}/>
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
        </div>
    );
}

export default App;
