import {Ekipa} from "./ModulEkipa"
import { Funkcionar, Igralec } from "./ModulOseba"

let direktor: Funkcionar = {
    ime: "Wyc",
    priimek: "Grousbeck",
    letoRojstva: 1961,
    id: 1,
    vloga: "Direktor",
    veljavnost: 10
}

let trener: Funkcionar = {
    ime: "Joe",
    priimek: "Mazzulla",
    letoRojstva: 1988,
    id: 2,
    vloga: "Trener",
    veljavnost: 5
}

let forward_guard: Igralec = {
    ime: "Jason",
    priimek: "Tatum",
    letoRojstva: 1998,
    id: 0,
    visina: 203,
    teza: 94,
    poskodovan: false
}

let guard_forward: Igralec = {
    ime: "Jaylen",
    priimek: "Brown",
    letoRojstva: 1996,
    id: 1,
    visina: 198,
    teza: 100,
    poskodovan: false
}

let guard: Igralec = {
    ime: "Marcus",
    priimek: "Smart",
    letoRojstva: 1994,
    id: 2,
    visina: 193,
    teza: 100,
    poskodovan: false
}

let guard2: Igralec = {
    ime: "Malcom",
    priimek: "Brogdon",
    letoRojstva: 1992,
    id: 3,
    visina: 196,
    teza: 97,
    poskodovan: false
}

let center_forward: Igralec = {
    ime: "Al",
    priimek: "Horford",
    letoRojstva: 1986,
    id: 4,
    visina: 206,
    teza: 107,
    poskodovan: false
}

let guard3: Igralec = {
    ime: "Derrick",
    priimek: "White",
    letoRojstva: 1994,
    id: 3,
    visina: 193,
    teza: 99,
    poskodovan: false
}

const ekipa = new Ekipa("Boston Celtics", 1946, direktor, trener, []);

ekipa.dodajIgralca(forward_guard);
ekipa.dodajIgralca(guard_forward);
ekipa.dodajIgralca(guard);
ekipa.dodajIgralca(guard2);
ekipa.dodajIgralca(center_forward);
console.log("\nZačetna ekipa: ")
console.log(ekipa.izpisiPodatke());
console.log("\nMenjava v ekipi: ")
ekipa.posodobiIgralca(guard3);
console.log(ekipa.izpisiPodatke());
ekipa.odstraniIgralca(4);
console.log("\nEkipa po izključitvi: ")
console.log(ekipa.izpisiPodatke());

const ekipa2 = new Ekipa("Milwaukee Bucks", 1955, direktor, trener, []);

let seznamEkip: Ekipa[] = [];
seznamEkip.push(ekipa);
seznamEkip.push(ekipa2);


export {seznamEkip}