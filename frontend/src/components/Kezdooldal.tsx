import { useEffect, useState } from "react";
import Header from "./header";
import { Tablet } from "./tabletek";
import Kartya from "./kartya";

export default function Kezdooldal() {

    const [tabletek, setTabletek] = useState<Tablet[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/tabletek")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setTabletek(data);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [])

    const draga = tabletek.length > 0
        ? [...tabletek].sort((a, b) => b.ar - a.ar).slice(0, 3)
        : [];

    const olcso = tabletek.length > 0
        ? [...tabletek].sort((a, b) => a.ar - b.ar).slice(0, 3)
        : [];


    return (
        <>
            <Header></Header>
            <main className="container">
                <div className="border p-1 row rounded ">
                    <h2>Olcsó tabletek:</h2>
                    {olcso.map((element) =>
                    <div className="col">
                        <Kartya  {...element} torles={false}></Kartya>
                        </div>
                    )}

                </div>
                <div className="border p-1 row rounded ">
                    <h2>Drága tabletek:</h2>
                    {draga.map((element) =>
                    <div className="col">
                        <Kartya  {...element} torles={false}></Kartya>
                        </div>
                    )}

                </div>
            </main>
        </>
    )
}