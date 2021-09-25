import { Router } from "express";
import {nuevoAlumno,mostrarAlumno,editarAlumno,eliminarAlumno} from "../controllers/alumno"

const router = Router()

router.post('/alumno',nuevoAlumno)
router.get('/alumno',mostrarAlumno)
router.put('/alumno/:id',editarAlumno)
router.delete('/alumno/:id',eliminarAlumno)

export default router