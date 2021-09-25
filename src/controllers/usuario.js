const bcrypt = require("bcrypt");
//importamos la clase persona
import {consultarPersonaById,buscarPersonaPorRol,crearPersona,actualizarEstado,actualizarPersona} from "./persona"

//Consulta general de usuarios
export const consultarUsuario = async (req, res) => {
  //llamamos a la funcion consultar persona
  const datos= await consultarPersonaById(0)
  res.json(datos);
};

//Consulta de usuarios por Id
export const consultarById = async (req, res) => {
  const datos= await consultarPersonaById(req.params.id)
  res.json(datos);
};

//Consulta general de usuarios por rol
export const consultarByRol = async (req, res) => {
  const datos = await buscarPersonaPorRol(req.params.id)
  res.json(datos);
};

//Ingresar usuario
export const ingresarUsuario = async (req, res) => {
  await crearPersona(req,res,1)
};

//en ves de eliminar cambiamos el estado a inactivo
export const eliminarUsuario = async (req, res) => {
 await actualizarEstado(req,res,0)
};

//editamos usuario
export const editarUsuario = async (req, res) => {
  await actualizarPersona(req,res)
};
