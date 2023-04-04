import React, {useState} from "react";
import {Igralec} from "../../Naloga1/ModulOseba";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";
import './DodajIgralca.css'
interface Props {
    onAdd: (igralec: Igralec) => void;
}

const initialState = {
    id: -1,
    ime: '',
    priimek: '',
    letoRojstva: Number(''),
    krajRojstva: '',
    visina: Number(''),
    teza: Number(''),
    poskodovan: false
};

export default function DodajIgralca(props: Props) {
    const [igralec, setIgralec] = useState<Igralec>(initialState);
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        props.onAdd(igralec);
        setIgralec(initialState)
    };

    const handleChange = (e: { target: { value: any; name: any; }; }) => {
        const { value, name } = e.target;

        setIgralec((prevState: Igralec) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formId">
                <Form.Label column sm="2">
                    Številka dresa
                </Form.Label>
                <Col sm="10">
                    <Form.Control required={true} type="text" placeholder="ID" name="id" value={igralec.id} onChange={handleChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formIgralec">
                <Form.Label column sm="2">
                    Ime
                </Form.Label>
                <Col sm="10">
                    <Form.Control required={true} type="text" placeholder="Ime" name="ime" value={igralec.ime} onChange={handleChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formIgralec">
                <Form.Label column sm="2">
                    Priimek
                </Form.Label>
                <Col sm="10">
                    <Form.Control required={true} type="text" placeholder="Priimek" name="priimek" value={igralec.priimek} onChange={handleChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formIgralec">
                <Form.Label column sm="2">
                    Leto rojstva
                </Form.Label>
                <Col sm="10">
                    <Form.Control required={true} type="number" placeholder="Leto rojstva" name="letoRojstva" value={igralec.letoRojstva} onChange={handleChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formIgralec">
                <Form.Label column sm="2">
                    Kraj rojstva
                </Form.Label>
                <Col sm="10">
                    <Form.Control required={true} type="text" placeholder="Kraj rojstva" name="krajRojstva" value={igralec.krajRojstva} onChange={handleChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formIgralec">
                <Form.Label column sm="2">
                    Višina
                </Form.Label>
                <Col sm="10">
                    <Form.Control required={true} type="number" placeholder="Višina" name="visina" value={igralec.visina} onChange={handleChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formIgralec">
                <Form.Label column sm="2">
                    Teža
                </Form.Label>
                <Col sm="10">
                    <Form.Control required={true} type="number" placeholder="Teža" name="teza" value={igralec.teza} onChange={handleChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formIgralec">
                <Col sm="10">
                    <Form.Check type="checkbox" label="Poskodovan" name="poskodovan" value={"true"} checked={igralec.poskodovan} onChange={handleChange} />
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>


    );
}