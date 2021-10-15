import {Router} from 'express';
//importamos modulos de tareas en seccion de docente
import {nuevaTarea,mostrarTarea,mostrarTareaPorId,editamosTareaPorId,verTareasDeAlumnos,asignarPunteo,mostramosPunteosDeClase,verPunteoTarea} from '../controllers/tarea'
//importamos modulos de tareas en seccion de alumnos
import {consultarTareaPorClase,subirTareaAlumno,verNotaTareas} from '../controllers/tareasAlumno'

const router = Router()

//seccion de docente
router.post('/tarea/nueva',nuevaTarea)
router.get('/tarea/ver/:materia/:grado',mostrarTarea)
router.get('/tarea/ver/:id',mostrarTareaPorId)
router.put('/tarea/editar/:id',editamosTareaPorId)
router.get('/tareas/enviadas/:id',verTareasDeAlumnos)
router.post('/asignar/nota',asignarPunteo)
router.get('/tarea/nota/:materia/:grado',mostramosPunteosDeClase)
router.get('/tarea/notaactual/:id',verPunteoTarea)

//seccion de alumnos
router.get('/vertarea/:id',consultarTareaPorClase)
router.post('/envio/tarea',subirTareaAlumno)
router.get('/vernota/:id',verNotaTareas)

export default router