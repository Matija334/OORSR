"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ekipa = void 0;
class Ekipa {
    constructor(ime, letoUstanovitve, direktor, trener, igralci) {
        this.id = Ekipa._id++;
        this.ime = ime;
        this.letoUstanovitve = letoUstanovitve;
        this.direktor = direktor;
        this.trener = trener;
        this.igralci = igralci;
    }
    dodajIgralca(igralec) {
        this.igralci.push(igralec);
    }
    posodobiIgralca(igralec) {
        const index = this.igralci.findIndex((igralecIzSeznama) => igralecIzSeznama.id === igralec.id);
        this.igralci[index] = igralec;
    }
    odstraniIgralca(id) {
        const index = this.igralci.findIndex((igralec) => igralec.id === id);
        this.igralci.splice(index, 1);
    }
    izpisiPodatke() {
        let igralci_string = "";
        let podatki = "";
        this.igralci.map((igralec) => {
            igralci_string += "\n" + igralec.id + " " + igralec.ime + " " + igralec.priimek + ", " + igralec.letoRojstva + ", " + igralec.visina + "cm " + igralec.teza + "kg ";
        });
        podatki += "\nNaziv: " + this.ime + "\nLeto ustanovitve: " + this.letoUstanovitve + "\nDirektor: " + this.direktor.ime + " " + this.direktor.priimek + "\nTrener: " + this.trener.ime + " " + this.trener.priimek + "\n" + igralci_string;
        return podatki;
    }
}
exports.Ekipa = Ekipa;
Ekipa._id = 0;
