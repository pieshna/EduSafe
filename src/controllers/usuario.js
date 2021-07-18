import { connect } from "../database";
const bcrypt = require("bcrypt");

//Consulta general de usuarios
export const consultarUsuario = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query("SELECT * FROM usuarios WHERE estado=1");
  res.json(rows);
};

//Consulta de usuarios por Id
export const consultarById = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM usuarios WHERE id=?", [
    req.params.id,
  ]);
  res.json(rows);
};

//Consulta general de usuarios por rol
export const consultarByRol = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM usuarios WHERE rol=? AND estado=1",
    [req.params.id]
  );
  res.json(rows);
};

//Ingresar usuario
export const ingresarUsuario = async (req, res) => {
  //encriptamos password
  const saltos = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, saltos);

  const connection = await connect();

  //valiamos que el correo y el usuario sean unicos
  const validarCorreo = await connection.query(
    "SELECT * FROM usuarios where correo=?",
    [req.body.correo]
  );
  console.log(validarCorreo[0]);
  if (validarCorreo[0].length===1) {
    return res.status(400).json(`el correo ${req.body.correo} ya existe`);
  }
  
  const validarUsuario = await connection.query(
    "SELECT * FROM usuarios WHERE usuario=?",
    [req.body.usuario]
  );
  console.log(validarUsuario[0]);
  if (validarUsuario[0].length===1) {
    return res.status(400).json(`el usuario ${req.body.usuario} ya existe`);
  }
  //ingresamos el usuario
  const result = await connection.query(
    "INSERT INTO usuarios (nombre,apellido,correo,usuario,password,foto,numero,rol,estado) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      req.body.nombre,
      req.body.apellido,
      req.body.correo,
      req.body.usuario,
      password,
      req.body.foto,
      req.body.numero,
      req.body.rol,
      req.body.estado,
    ]
  );
  res.json(result);
};

//en ves de eliminar cambiamos el estado a inactivo
export const eliminarUsuario = async (req, res) => {
  const connection = await connect();
  const result = await connection.query(
    "UPDATE usuarios SET estado=1 where id=?",
    [req.params.id]
  );
  res.json(result);
};

//editamos usuario
export const editarUsuario = async (req, res) => {
  //encriptamos password
  const saltos = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, saltos);

  const connection = await connect();
  const result = await connection.query(
    "UPDATE usuarios SET nombre=?, apellido=?, correo=?, usuario=?, password=?, foto=?, numero=?, rol=?, estado=? WHERE id=?",
    [
      req.body.nombre,
      req.body.apellido,
      req.body.correo,
      req.body.usuario,
      password,
      req.body.foto,
      req.body.numero,
      req.body.rol,
      req.body.estado,
      req.params.id,
    ]
  );
  res.json(result);
};
