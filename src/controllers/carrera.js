import { connect} from "../database";

//Ingresamos Carrera
export const ingresarCarrera= async (req, res) => {
    const db = await connect();
    const result= await db.query("insert into carrera (nombre) values (?)",[req.body.nombre])
    res.json(result)
}

//consultamos carrera por id
export const verCarreras = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select * from carrera where id=?",[req.params.id])
    res.json(rows)
}

//editamos carrera
export const editarCarrera= async (req, res) => {
    const db = await connect();
    const result = await db.query("update carrera set Nombre=? where id=?",[req.body.Nombre,req.params.id])
    res.json(result)
}