import {crearPersona,actualizarPersona,buscarPersonaPorRol,contadorPersonas} from './persona'

//Ingresamos maestro
export const ingresarMaestro= async (req, res) => {
    await crearPersona(req,res,2)
}

//Editamos maestro
export const editarMaestro= async (req, res) => {
    await actualizarPersona(req, res)
}

//mostramos todos los maestros
export const mostrarMaestros= async (req, res) => {
    const datos = await buscarPersonaPorRol(2)
    res.json(datos);
}

//contador de maestros
export const maestrosActuales = async (req, res) => {
    const datos=await contadorPersonas(2)
    res.json(datos)
}