import { connect } from "../database";
const bcrypt = require("bcrypt");

export const iniciarSesion = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM usuarios where usuario=? or correo=? ",
    [req.body.usuario, req.body.usuario]
  );
  //comparamos password
  const comparePassword = await bcrypt.compare(
    req.body.password,
    rows[0].password
  );
  //validamos si es valida la password
  if (!comparePassword) {
    res.status(400).json({ error: "invalid password" });
  } else {
    const datos= {
      "nombre": rows[0].nombre,
      "apellido" : rows[0].apellido,
      "correo" : rows[0].correo,
      "username" : rows[0].username,
      "foto": rows[0].foto,
    }
    //console.log(rows[0].password);
    res.json(datos);
  }
};


