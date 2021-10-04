import {crearPersona,actualizarPersona,buscarPersonaPorRol,contadorPersonas} from './persona'

//Ingresamos maestro
export const ingresarMaestro= async (req, res) => {
    const [ResultSetHeader]=await crearPersona(req,res)
    //obtenemos ID
    const resultado=ResultSetHeader.insertId
    console.log(resultado);
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
