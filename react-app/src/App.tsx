import React from 'react';
import './App.css';
import {Outlet } from "react-router-dom";
import Navigacija from "./Komponente/Navigacija/Navigacija";
import Noga from "./Komponente/Noga/Noga";
import Domov from "./Komponente/Domov/Domov";


function App() {
    return (
        <>
            <Navigacija/>
            <Outlet/>
            <Noga/>
        </>
    );
}

/*
<Navigacija />
<Telo letoUstanovitve={ekipa.letoUstanovitve} direktor={ekipa.direktor} trener={ekipa.trener} igralci={ekipa.igralci}/>
<Noga />*/
export default App;
