import {Col, Form, Row } from "react-bootstrap";
import {Ekipa, EkipaInterface} from "../../Naloga1/ModulEkipa";
import Button from "react-bootstrap/Button";
import {Funkcionar, Igralec} from "../../Naloga1/ModulOseba";
import {useState} from "react";
import {seznamEkip} from "../../Naloga1/Main";
import { useNavigate } from 'react-router-dom';

const ceo: Funkcionar = {
    ime: "Janez",
    priimek: "Novak",
    letoRojstva: 2000,
    id: 0,
    vloga: "Direktor",
    veljavnost: 5
}

const coach: Funkcionar = {
    ime: "Franc",
    priimek: "Horvat",
    letoRojstva: 1985,
    id: 0,
    vloga: "Trener",
    veljavnost: 10
}
export default function DodajEkipo() {
    const navigate = useNavigate();
    const [ime, setIme] = useState('');
    const [letoUstanovitve, setLetoUstanovitve] = useState(-1);
    const [selectedDirektor, setSelectedDirektor] = useState(0);
    const [selectedTrener, setSelectedTrener] = useState(0);
    const direktorji = [ceo];
    const trenerji = [coach];

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        let direktor = direktorji[selectedDirektor]
        let trener = trenerji[selectedTrener]
        let ekipa = new Ekipa(ime, letoUstanovitve, direktor, trener, []);
        seznamEkip.push(ekipa)
        navigate('/seznamEkip');
    };

    return (
        <>
            <h1>Dodaj ekipo</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formEkipa">
                    <Form.Label column sm="2">
                        Ime
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Ime" name="imeEkipe" value={ime} onChange={(event) => setIme(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formEkipa">
                    <Form.Label column sm="2">
                        Leto ustanovitve
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="number" placeholder="Leto ustanovitve" name="letoUstanovitbe" value={letoUstanovitve}  onChange={(event) => setLetoUstanovitve(Number(event.target.value))} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formDirektor">
                    <Form.Label column sm="2">
                        Direktor
                    </Form.Label>
                    <Col sm="10">
                        <Form.Select value={selectedDirektor} onChange={(event) => setSelectedDirektor(Number(event.target.value))}>
                            <option value="">Choose...</option>
                            {direktorji.map((option, index) => (
                                <option key={index} value={option.id}>{option.ime}{option.priimek}</option>
                            ))}
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formTrener">
                    <Form.Label column sm="2">
                        Trener
                    </Form.Label>
                    <Col sm="10">
                        <Form.Select value={selectedTrener} onChange={(event) => setSelectedDirektor(Number(event.target.value))}>
                            <option value="">Choose...</option>
                            {trenerji.map((option, index) => (
                                <option key={index} value={option.id}>{option.ime}{option.priimek}</option>
                            ))}
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}