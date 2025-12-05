import { Router } from "express";
import { nuevoContacto, mostrarContactos, buscarPorId, editarContacto, borrarContacto, buscarContacto } from "../BD/contactoBD.js";
const router = Router();

var artistas = ["Bad Bunny", "Maluma", "J Balvin", "Daddy Yankee", "Ozuna", "Anuel AA"];

router.get("/", function (req, res) {
  res.render("home", { artistas });
});

router.get("/info/:c", function (req, res) {
  res.render("home", { artistas });
});

router.get("/info", (req, res) => {
  res.render("informacion");
});

router.post("/contactanos", async function (req, res) {
  var nombre = req.body.nombre;
  var edad = req.body.edad;
  console.log("Nombre :" + nombre + "Edad: " + edad);
  const respuestaMongo = await nuevoContacto(req.body);
  console.log(respuestaMongo);
  res.render("respuesta", { nombre, edad });
});

router.get("/c", (req, res) => {
  res.render("contactanos");
});

router.get("/mostrarContactos", async function (req, res) {
  const contactosBD = await mostrarContactos();
  res.render("mostrarContactos", { contactosBD });
});

router.get("/editar/:id", async function (req, res) {
  const id = req.params.id;
  const contactoBD = await buscarPorId(id);
  res.render("editarContacto", { contactoBD });
});

router.post("/editarContacto", async function (req, res) {
  const respuestaMongo = await editarContacto(req.body);
  console.log(respuestaMongo);
  res.redirect("/mostrarContactos");
});

router.get("/borrar/:id", async function (req, res) {
  const id = req.params.id;
  const respuestaMongo = await borrarContacto(id);
  res.redirect("/mostrarContactos");
});

router.post("/buscarContacto", async function (req, res) {
  const nombre = req.body.nombre;
  const contactosBD = await buscarContacto(nombre);
  res.render("mostrarContactos", { contactosBD });
});

export default router;
