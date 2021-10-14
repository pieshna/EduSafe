import { connect} from "../database";

//creamos grados
export const nuevoGrado = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("INSERT INTO grado (nombre, ciclo,carrera,estado) values (?,?,?,1)", [req.body.nombre,req.body.ciclo,req.body.carrera]);
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
//mostramos grados por carrera
export const verGradoPorCarrera = async (req, res) => {
    const db = await connect();
    let year=new Date()
    const [rows] = await db.query("SELECT * FROM grado WHERE carrera=? and ciclo=?",[req.params.id, year.getFullYear()])
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

//ver Carreras
export const verCarreras = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM carrera")
    res.json(rows)
     
}

//consultar grado segun estudiante_id
export const verGradoPorestudiante= async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM estudiante WHERE usuario_id=?",[req.params.id])
    res.json(rows)
}

//Contar alumnos por grados
export const contarAlumnoPorGrado= async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select count(estudiante.id) as contador,grado_id,grado.id as idGrado, grado.nombre from estudiante inner join grado on grado_id=grado.id where carrera_id=? GROUP BY grado_id",[req.params.id])
    res.json(rows)
}
