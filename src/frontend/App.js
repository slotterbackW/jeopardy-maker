import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import CreateBoard from "./components/CreateBoard";

import './App.css'

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-board" element={<CreateBoard />} />
            </Routes>
        </BrowserRouter>
    )
}