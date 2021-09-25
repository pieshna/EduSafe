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

//creamos clase para buscar por roll
export async function buscarPersonaPorRol(props) {
  const connection = await connect();
  if (props === 0) {
    const [rows] = await connection.query(
        "SELECT * FROM usuarios WHERE estado=1 group by rol");
      return rows;
  }else{
      const [rows] = await connection.query(
    "SELECT * FROM usuarios WHERE rol=? AND estado=1",
    [props]
  );
  return rows;
  }
  
}

//creamos clase para el ingreso de persona
export async function crearPersona(req,res) {
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
     return res.status(400).json(`el correo ${req.body.correo} ya existe`);
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
       req.body.rol,
       req.body.estado,
     ]
   );
   res.json({"Mensaje": `${req.body.nombre} ${req.body.apellido} ingresado exitosamente`})
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

export async function actualizarPersona(req,res){
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
}