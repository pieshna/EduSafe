import {crearPersona,actualizarPersona,buscarPersonaPorRol,contadorPersonas} from './persona'

//Contador Secretario
export const contadorSecretario = async (req, res) => {
    const resultado= await contadorPersonas(2)
    res.json(resultado)
}

