import { connect } from "../database";
const bcrypt = require("bcrypt");

//creamos clase para busqueda de persona
export async function consultarPersonaById(props) {
  const db = await connect();
  if (props === 0) {
    const [rows] = await db.query("SELECT * FROM usuarios WHERE estado=1");
    return rows;
  } else {
    const [rows] = await db.query("SELECT * FROM usuarios WHERE id=?", [props]);
    return rows;
  }
}

//creamos clase para buscar por rol
export async function buscarPersonaPorRol(rol) {
  const connection = await connect();
  if (rol === 0) {
    const [rows] = await connection.query(
        "SELECT * FROM usuarios WHERE estado=1 group by rol");
      return rows;
  }else{
      const [rows] = await connection.query(
    "SELECT * FROM usuarios WHERE rol=? AND estado=1",
    [rol]
  );
  return rows;
  }
  
}

//creamos clase para el ingreso de persona
export async function crearPersona(req,res,rol) {
   //encriptamos password
   const saltos = await bcrypt.genSalt(10);
   const password = await bcrypt.hash(req.body.password, saltos);
 
   const connection = await connect();
 
   //valiamos que el correo y el usuario sean unicos
   const validarCorreo = await connection.query(
     "SELECT * FROM usuarios where correo=?",
     [req.body.correo]
   );
   //console.log(validarCorreo[0]);
   if (validarCorreo[0].length===1) {
     return res.status(422).json(`el correo ${req.body.correo} ya existe`);
   }
   
   const validarUsuario = await connection.query(
     "SELECT * FROM usuarios WHERE usuario=?",
     [req.body.usuario]
   );
   //console.log(validarUsuario[0]);
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
       rol,
       req.body.estado,
     ]
   );
   res.json({"Mensaje": `${req.body.nombre} ${req.body.apellido} ingresado exitosamente`})
   return result
}

//Eliminacion de persona
export async function actualizarEstado(req,res,props){
    const connection = await connect();
    if(props ===0){

        const result = await connection.query(
            "UPDATE usuarios SET estado=0 where id=?",
            [req.params.id]
            );
            res.json(result);
    }else{
        const result = await connection.query(
            "UPDATE usuarios SET estado=1 where id=?",
            [req.params.id]
            );
            res.json(result);
    }
}

//editamos persona
export async function actualizarPersona(req,res){
    //encriptamos password
  const saltos = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, saltos);

  const connection = await connect();
 
   //valiamos que el correo y el usuario sean unicos
   const validarCorreo = await connection.query(
     "SELECT * FROM usuarios where correo=? and id!=?",
     [req.body.correo,req.params.id]
   );
   //console.log(validarCorreo[0]);
   if (validarCorreo[0].length===1) {
     return res.status(400).json(`el correo ${req.body.correo} ya existe`);
   }
   
   const validarUsuario = await connection.query(
     "SELECT * FROM usuarios WHERE usuario=? AND id!=?",
     [req.body.usuario, req.params.id]
   );
   //console.log(validarUsuario[0]);
   if (validarUsuario[0].length===1) {
     return res.status(400).json(`el usuario ${req.body.usuario} ya existe`);
   }

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
}

//contador de personas
export async function contadorPersonas(rol){
  const db = await connect();
  const [rows] = await db.query("SELECT COUNT(id) as Actuales FROM usuarios WHERE rol=? AND estado=1",[rol]);
    return rows;
}