import React from "react";
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router";
import {Home} from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
