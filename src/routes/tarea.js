import {Router} from 'express';
import {nuevaTarea,mostrarTarea,mostrarTareaPorId,editamosTareaPorId} from '../controllers/tarea'

const router = Router()

router.post('/tarea/nueva',nuevaTarea)
router.get('/tarea/ver/:materia/:grado',mostrarTarea)
router.get('/tarea/ver/:id',mostrarTareaPorId)
router.put('/tarea/editar/:id',editamosTareaPorId)



export default router