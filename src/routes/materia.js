import { Router } from "express";
import { nuevaMateria,verMateria,eliminarMateria,editarMateria,verMateriaPorId } from "../controllers/materias";

const router = Router()

router.post('/materia',nuevaMateria)
router.get('/materia',verMateria)
router.get('/materia/:id',verMateriaPorId)
router.delete('/materia/:id',eliminarMateria)
router.put('/materia/:id',editarMateria)



export default router
