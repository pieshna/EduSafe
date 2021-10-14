import { Router } from "express";
import { nuevaMateria,verMateria,eliminarMateria,editarMateria,verMateriaPorId ,verMateriaPorGrados} from "../controllers/materias";

const router = Router()

router.post('/materia',nuevaMateria)
router.get('/materia',verMateria)
router.get('/materia/:id',verMateriaPorId)
router.delete('/materia/:id',eliminarMateria)
router.put('/materia/:id',editarMateria)
router.get('/materia/grado/:id',verMateriaPorGrados)



export default router
