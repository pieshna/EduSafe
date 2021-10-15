import { connect} from "../database";

export const nuevaTarea= async (req, res) => {
    const db = await connect();
    const result = await db.query("insert into tarea (fkMateria,fkGrado,fechaExpiracion,titulo,descripcion,punteo) values (?,?,?,?,?,?)",[req.body.fkMateria,req.body.fkGrado,req.body.fechaExpiracion,req.body.titulo,req.body.descripcion,req.body.punteo]);
    res.json(result);
     
}

export const mostrarTarea= async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select * from tarea where fkMateria = ? and fkGrado = ?",[req.params.materia,req.params.grado]);
    res.json(rows);
}

//mostrar Tareas por id
export const mostrarTareaPorId= async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select* from tarea where id=?",[req.params.id])
    res.json(rows)
}

//editamos tarea por id
export const editamosTareaPorId = async (req, res) => {
    const db = await connect();
    const result=await db.query("update tarea set fechaExpiracion=?,titulo=?,descripcion=?,punteo=? where id=?",[req.body.fechaExpiracion,req.body.titulo,req.body.descripcion,req.body.punteo,req.params.id]);
    res.json(result);
    
}

//Ver Tareas enviadas por alumnos
export const verTareasDeAlumnos = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select tareaenvio.id as tareaId, usuarios.nombre, usuarios.apellido, tareaenvio.contenido,tareaenvio.comentario, tareaenvio.fechaEnvio from tareaenvio INNER JOIN estudiante on estudiante.id=tareaenvio.fkAlumno INNER JOIN usuarios on estudiante.usuario_id=usuarios.id and tareaenvio.fkTarea=?",[req.params.id])
    res.json(rows)
}

//asignar punteo a la entrega de tarea
export const asignarPunteo = async (req, res) => {
    const db = await connect();
    const result = await db.query("insert into nota (fkTarea,punteo,comentario) values (?,?,?)",[req.body.fkTarea,req.body.punteo,req.body.comentario])
    res.json(result)
}

//mostramos punteos de todos los alumnos de la clase
export const mostramosPunteosDeClase= async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select tareaenvio.fkAlumno, nota.punteo, tarea.id as tareaId from nota inner join tareaenvio on tareaenvio.id=nota.fkTarea inner join tarea on tarea.id=tareaenvio.fkTarea and tarea.fkMateria=? and tarea.fkGrado=?",[req.params.materia,req.params.grado])
    res.json(rows)
}

//obtenemos el punteo de una tarea especifica por id
export const verPunteoTarea= async (req, res) => {
    const db = await connect();
    console.log(req.params.id);
    const [rows] = await db.query("select * from nota where fkTarea=?",[req.params.id])
    res.json(rows)
}
