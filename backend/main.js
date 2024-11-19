import express from "express";
import cors from 'cors';
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();


const app = express();

app.use(cors())


app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: "32769",
    password: process.env.db_password,
    database: 'arukereso_tabletek'
}).promise();

app.get('/tabletek', async (req, res) => {
    let temp;
    try {
        //skibidi
        if (req.query.firstId || req.query.lastId) {
            let firstId = parseInt(req.query.firstId);
            let lastId = parseInt(req.query.lastId);
            temp = await db.query('SELECT * FROM tabletek limit ?,?', [firstId - 1, lastId])
            console.log(firstId, lastId)
        }
        else{
            temp = await db.query('SELECT * FROM tabletek');
        }
        const rows = temp[0];
        const fields = temp[1];
        res.status(200).json(rows);
    } catch (error) {
        console.error(`Error retrieving phones ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.get('/tabletek:id', async (req, res) => {

    try {
        const temp = await db.query('SELECT * FROM tabletek where id = ?', [req.params.id]);
        const rows = temp[0];
        const fields = temp[1];
        res.status(200).json(rows);
    } catch (error) {
        console.error(`Error retrieving phones ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.post('/tabletek', async (req, res) => {
    try {
        let tabletData = [req.body.termek_nev, req.body.ar, req.body.ertekeles, req.body.processzor, req.body.memoria, req.body.hattertar, req.body.kepernyo_meret, req.body.oprendszer];

        console.log(tabletData)
        const [rows, fields] = await db.query('INSERT INTO tabletek (termek_nev, ar, ertekeles, processzor, memoria, hattertar, kepernyo_meret, oprendszer) VALUES (?,?,?, ?, ?, ?, ?, ?)', tabletData);
        res.status(200).json({ message: 'Tablet successfully added!' });


    } catch (error) {
        console.error(`Error retrieving phones ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.delete('/tabletek/:id', async (req, res) => {

    try {
        const temp = await db.query('Delete FROM tabletek where id = ?', [req.params.id]);
        const rows = temp[0];
        const fields = temp[1];
        res.status(200).json(rows);
    } catch (error) {
        console.error(`Error retrieving phones ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }

})




app.listen(3000);