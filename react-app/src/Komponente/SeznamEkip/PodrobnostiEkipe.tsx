import Noga from "../Noga/Noga";
import Navigacija from "../Navigacija/Navigacija";
import Telo from "../Telo/Telo";
import {useParams} from "react-router";
import {seznamEkip} from "../../Naloga1/Main";
import StranNeObstaja from "../StranNeObstaja/StranNeObstaja";

export default function PodrobnostiEkipe() {
    const { ekipaId } = useParams();
    const index = seznamEkip.findIndex(((ekipa) => ekipa.id === Number(ekipaId)));
    const ekipa = seznamEkip[index]
    if(ekipa) {
        return (
            <>
                <h1>Podrobnosti ekipe - {ekipa.ime}</h1>
                <Telo id={ekipa.id} letoUstanovitve={ekipa.letoUstanovitve} direktor={ekipa.direktor}
                      trener={ekipa.trener}
                      igralci={ekipa.igralci}/>
            </>
        );
    } else {
        return <StranNeObstaja />
    }
}