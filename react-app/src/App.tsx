import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Domov from "./Komponente/Domov/Domov";
import StranNeObstaja from "./Komponente/StranNeObstaja/StranNeObstaja";
import SeznamEkip from "./Komponente/SeznamEkip/SeznamEkip";
import PodrobnostiEkipe from "./Komponente/SeznamEkip/PodrobnostiEkipe";
import DodajEkipo from "./Komponente/SeznamEkip/DodajEkipo";


function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Domov/>,
            errorElement: <StranNeObstaja/>,
        },
        {
            path: '/seznamEkip',
            element: <SeznamEkip/>,
            errorElement: <StranNeObstaja/>,
        },
        {
            path: '/seznamEkip/:ekipaId',
            element: <PodrobnostiEkipe/>,
            errorElement: <StranNeObstaja/>,
        },
        {
            path: '/dodajEkipo',
            element: <DodajEkipo />,
            errorElement: <StranNeObstaja/>,
        },
        {
            path: '*',
            element: <StranNeObstaja />,
            errorElement: <StranNeObstaja/>,
        },
    ]);
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

/*
<Navigacija />
<Telo letoUstanovitve={ekipa.letoUstanovitve} direktor={ekipa.direktor} trener={ekipa.trener} igralci={ekipa.igralci}/>
<Noga />*/
export default App;
