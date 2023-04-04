import Navigacija from "../Navigacija/Navigacija";
import Noga from "../Noga/Noga";
import {Link, Outlet} from "react-router-dom";
import React from "react";
import {seznamEkip} from "../../Naloga1/Main";
import Button from "react-bootstrap/Button";

export default function SeznamEkip() {

    return (
        <>
            <h1>Seznam ekip</h1>
            <ul className="list-group">
                {seznamEkip.map((ekipa, index) => {
                    return (
                        <li key={index} className="list-group-item"><Link key={index} to={"/seznamEkip/" + ekipa.id}>{ekipa.ime}</Link></li>
                    );
                })}
            </ul>
            <Link to={"/dodajEkipo"}>Dodaj ekipo</Link>
        </>
    );
}