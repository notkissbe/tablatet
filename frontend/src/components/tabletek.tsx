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
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterTablets, setFilterTablets] = useState<Tablet[]>([]);
    const [sortConfig, setSortConfig] = useState<{ direction: "asc" | "desc" } | null>(null);

    function fetchTablets(page: number) {
        fetch("http://localhost:3000/tabletek?firstId=" + page + "&lastId=" + Number(page + 4))
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setTabletek(data);
                setFilterTablets(data);

            })
    }

    useEffect(() => {
        fetchTablets(currentPage);
    }, [currentPage])

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = tabletek.filter((tablet) =>
            tablet.termek_nev.toLowerCase().includes(term) ||
            tablet.processzor.toLowerCase().includes(term) ||
            tablet.oprendszer.toLowerCase().includes(term)
        );
        setFilterTablets(filtered);
    }

    const sortTablets = (direction: "asc" | "desc") => {
        const sortedTablets = [...filterTablets].sort((a, b) => {
            if (a.ar < b.ar) {
                return direction === "asc" ? -1 : 1;
            }
            if (a.ar > b.ar) {
                return direction === "asc" ? 1 : -1;
            }
            return 0;
        });
        setFilterTablets(sortedTablets);
        setSortConfig({ direction });
    };



    return (<><Header />
        <main className="container">
            <div className="card">
                <div className="card-body">
                    <input type="search" className="form-control" placeholder="Keresés" onChange={handleSearch} />
                    <label>Ár szerint rendezés: <br />
                        <label >
                            Növekvő:
                            <input type="radio" name="rendezes" onClick={() => sortTablets("asc")} id="" />
                        </label> <br />
                        <label >
                            Csökkenő:
                            <input type="radio" name="rendezes" onClick={() => sortTablets("desc")} id="" />
                        </label>
                    </label>
                </div>
            </div>
            {filterTablets.map((element) =>
                <Kartya {...element} torles={false}></Kartya>
            )}

            <div className="row border rounded mx-4">
                <div className="row text-center">Oldal</div>
                <div className="row">
                    <button className="btn btn-danger col" onClick={() => { if (currentPage > 1) { setCurrentPage(currentPage - 5) } }}>-</button>
                    <div className="col text-center"> {(currentPage - 1) / 5}</div>
                    <button className="btn btn-success col" onClick={() => { setCurrentPage(currentPage + 5) }}>+</button>
                </div>
            </div>
        </main>
    </>)
}