import { connect} from "../database";

//creamos materias
export const nuevaMateria= async (req, res) => {
    const db = await connect();
    const result = await db.query("INSERT INTO materia (nombre,estado) values (?,1)",[req.body.nombre])
    res.json(result)
}

//mostramos materia por id
export const verMateriaPorId = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM materia WHERE id=?",[req.params.id])
    res.json(rows)
}

// mostramos materias
export const verMateria= async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM materia")
    res.json(rows)
}

//eliminar materia
export const eliminarMateria= async (req, res) => {
    const db = await connect();
    const result = await db.query("UPDATE materia SET estado=0 WHERE id=?",[req.params.id])
    res.json(result)
}

//editar materias
export const editarMateria= async (req, res) => {
    const db = await connect();
    const result = await db.query("UPDATE materia SET nombre=?, estado=? WHERE id=?", [req.body.nombre,req.body.estado,req.params.id])
    res.json(result)
}