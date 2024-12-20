import { useEffect, useState } from "react";
import Header from "./header";
import Kartya from "./kartya";
import { Tablet } from "./tabletek";

export default function TabletDel() {

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

    return (<><Header />
        <main className="container">
            {tabletek.map((element) =>
                <Kartya {...element} torles={true}></Kartya>
            )}

        </main>
    </>)
}