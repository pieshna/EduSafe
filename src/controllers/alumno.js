import {connect} from "../database";
import {crearPersona,buscarPersonaPorRol,actualizarPersona,actualizarEstado,contadorPersonas} from "./persona"

//creamor alumno
export const nuevoAlumno = async (req, res) => {
    const [ResultSetHeader] = await crearPersona(req, res,4)
    //obtenemos Id
    const estudianteID=ResultSetHeader.insertId
    const db = await connect();
    await db.query("INSERT INTO estudiante (usuario_id, grado_id, carrera_id) values (?,?,?)",[estudianteID,req.body.grado_id,req.body.carrera_id])
}

//mostramos alumnos activos
export const mostrarAlumno = async (req, res) => {
    const resultado = await buscarPersonaPorRol(4)
    res.json(resultado)
}

//editar alumnos
export const editarAlumno = async (req, res) => {
    await actualizarPersona(req,res);
    const db = await connect();
    await db.query("UPDATE estudiante SET grado_id=?, carrera_id=? WHERE usuario_id=?",[req.body.grado_id,req.body.carrera_id,req.params.id])
}

//eliminar Alumno
export const eliminarAlumno = async (req, res) => {
    await actualizarEstado(req,res,0)
}

//Contador alumno
export const contadorAlumno = async (req, res) => {
    const resultado= await contadorPersonas(4)
    res.json(resultado)
}