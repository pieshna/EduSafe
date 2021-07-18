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
    console.log(rows[0].password);
    res.json(rows);
  }
};


