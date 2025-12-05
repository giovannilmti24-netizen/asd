import mongoose from "mongoose";

async function conectarBD(){
  try{
    const conexion = await mongoose.connect(process.env.MONGO_URI)
    console.log("Conexión establecida con Mongo Atlas.")
  }
  catch(ex){
    console.log("Error."+ex)
  }
}

export default conectarBD
