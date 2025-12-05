import dotenv from "dotenv";
dotenv.config();

import express from "express";
import rutas from "./routes/rutas.js";
import conectarBD from "./BD/bd.js"

const app = express()

async function conexion(){
  await conectarBD()
}

conexion()

app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.use("/",rutas)


const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log("Aplicación en http://localhost:" + PORT);
})
