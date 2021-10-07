import { connect } from "../database";
import { consultarUsuario,crearPersona } from "./persona";

export async function ingresarEncargado(req, res){
    const [ResultSetHeader]= await crearPersona(req,res)
    const encargadoID=ResultSetHeader.insertId
    const db = await connect();
    await db.query("INSERT INTO encargado (estudiante_id,persona_id) values(?,?)",[req.body.estudianteId, encargadoID]);
    
}

export async function ingresarEncargadoExistente(req, res){
    const db = await connect();
    await db.query("INSERT INTO encargado (estudiante_id,persona_id) values (?,?)",[req.body.estudiante_id,req.body.persona_id])
}
//Buscar encargado por id
export async function buscarEncargado(req, res){
    const resultado = await consultarUsuario(req.params.id)
    res.json(resultado[0])
}

//buscar encargado por estudiante_id
export async function buscarEncargadoPorEstudiante(req, res){
    const db = await connect();
    const [rows] =await db.query("select usuarios.id,usuarios.nombre,usuarios.apellido,usuarios.correo,usuarios.usuario,usuarios.password,usuarios.foto, usuarios.numero,usuarios.rol,usuarios.estado from usuarios INNER join encargado on encargado.persona_id=usuarios.id inner join estudiante on estudiante.id=encargado.estudiante_id and estudiante.usuario_id=?",[req.params.id])
    res.json(rows)

}