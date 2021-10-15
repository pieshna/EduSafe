import { connect} from "../database";

//Consultamos las tareas disponibles en clase
export const consultarTareaPorClase = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select tarea.id,tarea.titulo,tarea.fechaExpiracion,tarea.descripcion,tarea.punteo from tarea where fkGrado=?",[req.params.id])
    res.json(rows)
}

//Subir tarea de alumno
export const subirTareaAlumno= async (req, res) => {
    const db = await connect();
    const result = await db.query("insert into tareaenvio (fkAlumno,fkTarea,contenido,comentario,fechaEnvio) values (?,?,?,?,?)",[req.body.fkAlumno,req.body.fkTarea,req.body.contenido,req.body.comentario,req.body.fechaEnvio])
    res.json(result)
}

//ver notas de las tareas segun el id del alumnos
export const verNotaTareas= async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select nota.id,nota.punteo,tareaenvio.fkTarea as tareaId from nota inner join tareaenvio on tareaenvio.id=nota.fkTarea inner join estudiante on estudiante.id=tareaenvio.fkAlumno and estudiante.usuario_id=?",[req.params.id])
    res.json(rows)
}
