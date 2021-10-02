import { connect } from "../database";
import { consultarUsuario,crearPersona } from "./persona";

export async function ingresarEncargado(req, res){
    const [ResultSetHeader]= await crearPersona(req,res)
    const encargadoID=ResultSetHeader.insertId
    const db = await connect();
    await db.query("INSERT INTO encargado (estudiante_id,persona_id) values(?,?)",[req.body.estudianteId, encargadoID]);
    
}

export async function buscarEncargado(req, res){
    const resultado = await consultarUsuario(req.params.id)
    res.json(resultado[0])
}