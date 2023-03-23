import {Igralec} from "../../Naloga1/ModulOseba";

export default function IgralecKomponenta({id, ime, priimek, letoRojstva, krajRojstva, visina, teza, poskodovan} : Igralec) {
    //let igralec: Igralec = {ime: "Matija", priimek: "Krsnik", letoRojstva: 2002, krajRojstva: "Ptuj", id: 0, visina: 187, teza: 85, poskodovan: false}
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{ime}</td>
                <td>{priimek}</td>
                <td>{letoRojstva}</td>
                <td>{krajRojstva}</td>
                <td>{visina}</td>
                <td>{teza}</td>
                <td>{String(poskodovan)}</td>
            </tr>
        </>
    )
}