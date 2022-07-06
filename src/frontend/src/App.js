import React from "react";
import './App.css';
import {Navbar} from "./components/Navbar";
import {Route, Routes} from "react-router";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route index element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
