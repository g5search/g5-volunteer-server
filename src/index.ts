import express from 'express'
import * as dotenv from "dotenv"
dotenv.config({ path: `${__dirname}/../.env` })
const app = express()
const {PORT} = process.env
import { dbConfig } from "./models";
dbConfig
.sync().then(() => console.log("connected to db"))            
.catch(() => {            
    throw "error";       
 });     
app.get('/', (req, res) => res.json({ env: process.env }));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});