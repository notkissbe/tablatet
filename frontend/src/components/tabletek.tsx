import { useEffect, useState } from "react";
import Header from "./header";
import Kartya from "./kartya";

export interface Tablet {
    id: number;
    termek_nev: string;
    ar: number;
    ertekeles: number;
    processzor: string;
    memoria: number;
    hattertar: number;
    kepernyo_meret: number;
    oprendszer: string;
}


export default function Tabletek() {

    const [tabletek, setTabletek] = useState([] as Tablet[])

    useEffect(() => {
        async function load() {
            fetch("http://localhost:3000/tabletek")
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    setTabletek(data)
                })
        }
        load()
    }, [])

    return (<><Header/>
        <main className="container">
            {tabletek.map((element) =>
                <Kartya {...element} torles={false}></Kartya>
            )}

        </main>
        </>)
}