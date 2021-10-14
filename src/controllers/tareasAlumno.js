import { connect} from "../database";

//Consultamos las tareas disponibles en clase
export const consultarTareaPorClase = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select tarea.titulo,tarea.fechaExpiracion,tarea.descripcion,tarea.punteo from tarea where fkGrado=?",[req.params.id])
    res.json(rows)
}
