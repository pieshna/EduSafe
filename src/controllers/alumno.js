import {connect} from "../database";
import {crearPersona,buscarPersonaPorRol,actualizarPersona,actualizarEstado,contadorPersonas} from "./persona"

//creamor alumno
export const nuevoAlumno = async (req, res) => {
    /* const [ResultSetHeader] = await crearPersona(req, res)
    //obtenemos Id
    const estudianteID=ResultSetHeader.insertId */
    const db = await connect();
    const result = await db.query("INSERT INTO estudiante (usuario_id, grado_id, carrera_id) values (?,?,?)",[req.body.usuario_id,req.body.grado_id,req.body.carrera_id])
    res.json(result)
}

//mostramos alumnos activos
export const mostrarAlumno = async (req, res) => {
    const resultado = await buscarPersonaPorRol(4)
    res.json(resultado)
}

//editar alumnos
export const editarAlumno = async (req, res) => {
    //await actualizarPersona(req,res);
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

//Ver alumnos por grados 
export const verAlumnoPorGrado = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select estudiante.id as estudianteId, usuarios.nombre,usuarios.apellido from usuarios inner join estudiante on usuarios.id=estudiante.usuario_id and estudiante.grado_id=?",[req.params.id])
    res.json(rows)
}

//mostramos estudiante por id
export const mostrarEstudiantePorId= async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select id from estudiante where usuario_id=?",[req.params.id])
    res.json(rows)
}