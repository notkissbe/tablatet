import { Button } from "react-bootstrap";

export interface kartyaIface {
    id: number;
    termek_nev: string;
    ar: number;
    ertekeles: number;
    processzor: string;
    memoria: number;
    hattertar: number;
    kepernyo_meret: number;
    oprendszer: string;
    torles: boolean;
}

function torles(id:number){
    fetch(`http://localhost:3000/tabletek/${id}`, {
        method: "DELETE"
    })
}

export default function Kartya(props:kartyaIface) {
    if (props.torles){
        return <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.termek_nev}</h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Ár: {props.ar} Ft</li>
                <li className="list-group-item">Processzor: {props.processzor}</li>
                <li className="list-group-item">Memoria: {props.memoria} GB</li>
                <li className="list-group-item">Hattertar: {props.hattertar} GB</li>
                <li className="list-group-item">Képernyőméret: {props.kepernyo_meret}</li>
                <li className="list-group-item">Oprendszer: {props.oprendszer}</li>
                <li className="list-group-item">Értékelés: {props.ertekeles}</li>

            </ul>
                <Button variant="danger w-100" onClick={() => torles(props.id)}>Törlés</Button>
        </div>
    </div>
        
    }
        
   else{
    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.termek_nev}</h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Ár: {props.ar} Ft</li>
                <li className="list-group-item">Processzor: {props.processzor}</li>
                <li className="list-group-item">Memoria: {props.memoria} GB</li>
                <li className="list-group-item">Hattertar: {props.hattertar} GB</li>
                <li className="list-group-item">Képernyőméret: {props.kepernyo_meret}</li>
                <li className="list-group-item">Oprendszer: {props.oprendszer}</li>
                <li className="list-group-item">Értékelés: {props.ertekeles}</li>

            </ul>
            
        </div>
    </div>
        
   )
   }
}