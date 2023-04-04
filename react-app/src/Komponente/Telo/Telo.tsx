import IgralecKomponenta from "../Igralec/Igralec";
import './Telo.css'
import Opozorilo from "../Opozorilo/Opozorilo";
import Info from "../Info/Info";
import {Funkcionar, Igralec} from "../../Naloga1/ModulOseba";
import {useState} from "react";
import DodajIgralca from "../Igralec/DodajIgralca";

interface EkipaProps {
    id: number;
    letoUstanovitve: number;
    direktor: Funkcionar;
    trener: Funkcionar;
    igralci: Igralec[];
}

export default function Telo({id, letoUstanovitve, direktor, trener, igralci}: EkipaProps) {
    const [igralciSeznam, setIgralciSeznam] = useState<Igralec[]>(igralci);

    const handleAdd = (igralec: Igralec) => {
        setIgralciSeznam((prevState: Igralec[]) =>{
            return [...prevState, igralec];
        })
    }

    return (
        <>
            <div className="podatkiOEkipi">
                <div>ID: {id}</div>
                <div>Leto ustanovitve: {letoUstanovitve}</div>
                <div>Direktor: {direktor.ime} {direktor.priimek}</div>
                <div>Trener: {trener.ime} {trener.priimek}</div>
                <div>{igralci.length < 11 && <Opozorilo/>}</div>
                <div>{igralci.length >= 11 && <Info/>}</div>
                <div>Število igralcev: {igralci.length}</div>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Ime</th>
                    <th>Priimek</th>
                    <th>Leto rojstva</th>
                    <th>Kraj rojstva</th>
                    <th>Višina</th>
                    <th>Teža</th>
                    <th>Poškodovan</th>
                </tr>
                </thead>
                <tbody>
                {igralciSeznam.map((igralec, index) => {
                    return (
                        <IgralecKomponenta key={igralec.id} id={igralec.id} ime={igralec.ime} priimek={igralec.priimek}
                                           letoRojstva={igralec.letoRojstva} krajRojstva={igralec.krajRojstva}
                                           visina={igralec.visina} teza={igralec.teza} poskodovan={igralec.poskodovan}/>
                    )
                })}
                </tbody>
            </table>
            <DodajIgralca onAdd={handleAdd}/>
        </>
    )
}