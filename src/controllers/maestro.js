import {crearPersona,actualizarPersona,buscarPersonaPorRol,contadorPersonas} from './persona'
import { connect} from "../database";

//Ingresamos maestro
export const ingresarMaestro= async (req, res) => {
    const db = await connect();
    const result = await db.query("Insert into maestro (fkUsuario,fkMateria,fkGrado) values (?,?,?)",[req.body.fkUsuario,req.body.fkMateria,req.body.fkGrado]);
    res.json(result);
     
}

//buscar maestro por materias
export const buscarMaestroMateria = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select maestro.id, usuarios.nombre, usuarios.apellido from usuarios inner join maestro on usuarios.id=maestro.fkUsuario and fkMateria=? group by usuarios.id", [req.params.id])
    res.json(rows);
    
}

//ver materias del maestro, se busca por id de usuario
export const buscarMateriaMaestro= async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select materia.id, materia.nombre from materia inner join maestro on maestro.fkMateria=materia.id and maestro.fkUsuario=? group by materia.id",[req.params.id])
    res.json(rows)
}

//Editamos maestro
export const editarMaestro= async (req, res) => {
    await actualizarPersona(req, res)
}

//mostramos todos los maestros
export const mostrarMaestros= async (req, res) => {
    const datos = await buscarPersonaPorRol(3)
    res.json(datos);
}

//contador de maestros
export const maestrosActuales = async (req, res) => {
    const datos=await contadorPersonas(3)
    res.json(datos)
}

//mostramos asignaciones de maestros por id
export const consultarAsignacion= async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select * from maestro where id=?",[req.params.id])
    res.json(rows)
}

//editar asignacion de docente
export const editarAsignacion= async (req, res) => {
    const db = await connect();
    const result = await db.query("update maestro set fkUsuario=?,fkMateria=?,fkGrado=? where id=?",[req.body.fkUsuario,req.body.fkMateria,req.body.fkGrado,req.params.id])
    res.json(result)
}

//ver grados asignados al docente
export const gradosAsignadosMaestro= async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select grado.id,grado.nombre,maestro.fkMateria as materiaPerteneciente from grado inner join maestro on maestro.fkGrado=grado.id and maestro.fkUsuario=?",[req.params.id])
    res.json(rows)
}