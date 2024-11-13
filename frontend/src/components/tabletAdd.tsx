import { BlockquoteHTMLAttributes, FormEvent, FormEventHandler, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Tablet } from "./tabletek"
import Header from "./header";

interface AddTablet{
    termek_nev: string;
    ar: number;
    ertekeles: number;
    processzor: string;
    memoria: number;
    hattertar: number;
    kepernyo_meret: number;
    oprendszer: string
}

export default function TabletAdd(){

    const [tablets, setTablets] = useState()
    //const [formData, setFormData] = useState( as AddTablet);

    const handleChange =  async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let ujTablet: any = {};
        formData.forEach((value, key) => (ujTablet[key] = value));
        try{
            const response = await fetch("http://localhost:3000/tabletek", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(ujTablet)
            });
            if (!response.ok){
                console.log("nem jo a post")
            }
        }
        catch{
            console.log("hiba")
        }
      };



    return(<>
    <Header></Header>
        <main className="container">
            <Form onSubmit={handleChange}>
                <Form.Group className="mb-3" controlId="formBrand">
                    <Form.Label>Termék neve</Form.Label>
                    <Form.Control type="text" name="termek_nev" placeholder="Termék neve" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Ár</Form.Label>
                    <Form.Control type="number" name="ar" placeholder="Ár" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRating">
                    <Form.Label>Értékelés</Form.Label>
                    <Form.Control type="number" name="ertekeles" placeholder="Értékelés" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formProcessor">
                    <Form.Label>Processzor</Form.Label>
                    <Form.Control type="text" name="processzor" placeholder="Processzor" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMemory">
                    <Form.Label>Memoria</Form.Label>
                    <Form.Control type="number" name="memoria" placeholder="Memoria" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStorage">
                    <Form.Label>Hattertar</Form.Label>
                    <Form.Control type="number" name="hattertar" placeholder="Hattertar" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formScreenSize">
                    <Form.Label>Képernyőméret</Form.Label>
                    <Form.Control type="number" name="kepernyo_meret" placeholder="Képernyőméret" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formOperatingSystem">
                    <Form.Label>Oprendszer</Form.Label>
                    <Form.Control type="text" name="oprendszer" placeholder="Oprendszer" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Hozzáadás
                </Button>

            </Form>
        </main>
        </>)
}