import Contacto from "../models/modelContacto.js";

export async function nuevoContacto({nombre, edad}) {
  const contacto = new Contacto({ nombre, edad });
  console.log("------------");
  console.log(contacto);
  console.log("------------");

  try {
    const respuestaMongo = await contacto.save();
    return respuestaMongo;
  } catch (error) {
    console.error("❌ Error al guardar contacto:", error);
    throw error; // opcional, para manejarlo desde quien llama la función
  }
}

export async function mostrarContactos(){
  const contactosBD = await Contacto.find()
  return contactosBD
}

export async function buscarPorId(id){
  const contactoBD = await Contacto.findById(id)
  return contactoBD 
}

export async function editarContacto({id,nombre,edad}){
  const respuestaMongo = await Contacto.findByIdAndUpdate(id,{nombre,edad})
  return respuestaMongo
}

export async function borrarContacto(id){
  const respuestaMongo = await Contacto.findByIdAndDelete(id)
  return respuestaMongo
}

export async function buscarContacto(nombre){
  const contactosBD = await Contacto.find({nombre})
  return contactosBD
}
