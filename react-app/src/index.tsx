import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Domov from "./Komponente/Domov/Domov";
import StranNeObstaja from "./Komponente/StranNeObstaja/StranNeObstaja";
import SeznamEkip from "./Komponente/SeznamEkip/SeznamEkip";
import PodrobnostiEkipe from "./Komponente/SeznamEkip/PodrobnostiEkipe";
import DodajEkipo from "./Komponente/SeznamEkip/DodajEkipo";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <StranNeObstaja/>,
        children: [
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
                element: <DodajEkipo/>,
                errorElement: <StranNeObstaja/>,
            },
        ],
    },
    {
        path: '*',
        element: <StranNeObstaja/>,
        errorElement: <StranNeObstaja/>,
    },
]);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
