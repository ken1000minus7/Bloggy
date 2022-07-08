import React from "react";
import './App.css';
import {Navbar} from "./components/Navbar";
import {Route, Routes} from "react-router";
import {NotFound} from "./pages/NotFound";
import {HomePage} from "./pages/HomePage";
import {BlogPage} from "./pages/BlogPage";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route index element={<HomePage />} />
                <Route exact path="/home" element={<HomePage />} />
                <Route exact path="/blog/:id" element={<BlogPage />} />
                <Route exact path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
