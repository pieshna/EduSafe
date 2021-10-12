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
