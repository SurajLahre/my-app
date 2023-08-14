import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VarHome from './VariableSingleContent/VarHome';
import Html from './VariableSingleContent/Html';
import Css from './VariableSingleContent/Css';

const MainContent = () => {
    return (

        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Home Profile</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                </nav>
            </div>


            {/* sidebar navigation routing controll */}


            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<VarHome />} />
                    <Route exact path="/html" element={<Html />} />
                    <Route exact path="/css" element={<Css />} />
                </Routes>


            </BrowserRouter>

        </main>
    );
}

export default MainContent;
