import {Funkcionar, Igralec} from "./ModulOseba";

interface EkipaInterface {
    id: number;
    ime: string;
    letoUstanovitve: number;
    direktor: Funkcionar
    trener: Funkcionar
    igralci: Igralec[]
}

class Ekipa {
    static _id: number = 0;
    id: number;
    ime: string;
    letoUstanovitve: number;
    direktor: Funkcionar;
    trener: Funkcionar;
    igralci: Igralec[];

    constructor(
        ime: string,
        letoUstanovitve: number,
        direktor: Funkcionar,
        trener: Funkcionar,
        igralci: Igralec[]
    ) {
        this.id = Ekipa._id++;
        this.ime = ime;
        this.letoUstanovitve = letoUstanovitve;
        this.direktor = direktor;
        this.trener = trener;
        this.igralci = igralci;
    }

    public dodajIgralca(igralec: Igralec): void {
        this.igralci.push(igralec);
    }

    public posodobiIgralca(igralec: Igralec): void {
        const index = this.igralci.findIndex((igralecIzSeznama) => igralecIzSeznama.id === igralec.id);
        this.igralci[index] = igralec;
    }

    public odstraniIgralca(id: number): void {
        const index = this.igralci.findIndex((igralec) => igralec.id === id);
        this.igralci.splice(index, 1);
    }

    public izpisiPodatke(): string {
        let igralci_string: string = "";
        let podatki: string = "";

        this.igralci.map((igralec) => {
            igralci_string += "\n" + igralec.id + " " + igralec.ime + " " + igralec.priimek + ", " + igralec.letoRojstva + ", " + igralec.visina + "cm " + igralec.teza + "kg ";
        })

        podatki += "\nNaziv: " + this.ime + "\nLeto ustanovitve: " + this.letoUstanovitve + "\nDirektor: " + this.direktor.ime + " " + this.direktor.priimek + "\nTrener: " + this.trener.ime + " " + this.trener.priimek + "\n" + igralci_string;

        return podatki;
    }
}
export {Ekipa}
export type {EkipaInterface}