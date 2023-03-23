import Noga from "../Noga/Noga";
import Navigacija from "../Navigacija/Navigacija";
import './Domov.css'
import Menu from "../Menu/Menu";

export default function Domov() {
    return (
        <>
            <Navigacija/>
            <h1>Pozdravljeni na moji strani!</h1>
            <Noga/>
        </>
    );
}