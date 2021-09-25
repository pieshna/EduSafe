import { connect} from "../database";

//creamos grados
export const nuevoGrado = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("INSERT INTO grado (nombre, ciclo,estado) values (?,?,1)", [req.body.nombre,req.body.ciclo]);
    res.json(rows)
}

//mostramos los grados
export const verGrado = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("SELECT * from grado")
    res.json(rows)
}

//mostramos grados por Id
export const verGradoPorId = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM grado WHERE id=?",[req.params.id])
    res.json(rows)
}

//mostramos grado por ciclo
export const verGradoPorCiclo = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM grado WHERE ciclo=?" ,[req.params.id])
    res.json(rows)
}

// editamos grados
export const editarGrado = async (req, res) => {
    const db = await connect();
    const result = await db.query("UPDATE grado SET nombre=?, ciclo=?, estado=? WHERE id=?", [req.body.nombre,req.body.ciclo,req.body.estado,req.params.id])
    res.json(result)
}

//eliminamos grados
export const eliminarGrado = async (req, res) => {
    const db = await connect();
    const result = await db.query("UPDATE grado set estado=0 WHERE id=?",[req.params.id])
    res.json(result)
}

