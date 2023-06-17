import React from 'react'
import { Routes, Route } from "react-router-dom";
import Contact from './Contact';
import Success from "./Success";
const App = () => {
    return (
        <div className='h-screen bg-emerald-500 w-100
          '>
            <Routes>
                <Route element={<Contact />} path="/" />
                <Route element={<Success />} path="/success" />

            </Routes>
        </div>

    )
}

export default App