import {Router} from 'express';
//importamos modulos de tareas en seccion de docente
import {nuevaTarea,mostrarTarea,mostrarTareaPorId,editamosTareaPorId} from '../controllers/tarea'
//importamos modulos de tareas en seccion de alumnos
import {consultarTareaPorClase} from '../controllers/tareasAlumno'

const router = Router()

//seccion de docente
router.post('/tarea/nueva',nuevaTarea)
router.get('/tarea/ver/:materia/:grado',mostrarTarea)
router.get('/tarea/ver/:id',mostrarTareaPorId)
router.put('/tarea/editar/:id',editamosTareaPorId)


//seccion de alumnos
router.get('/vertarea/:id',consultarTareaPorClase)


export default router