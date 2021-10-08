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
    const [rows] = await db.query("select usuarios.nombre, usuarios.apellido from usuarios inner join maestro on usuarios.id=maestro.fkUsuario and fkMateria=?", [req.params.id])
    res.json(rows);
    
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
