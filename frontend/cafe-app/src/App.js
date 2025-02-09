import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import HomePage from "./pages/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;