import { Router } from "express";
import { nuevaMateria,verMateria,eliminarMateria,editarMateria } from "../controllers/materias";

const router = Router()

router.post('/materia',nuevaMateria)
router.get('/materia',verMateria)
router.delete('/materia',eliminarMateria)
router.put('/materia/:id',editarMateria)



export default router
