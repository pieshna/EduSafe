import { Router } from "express";
import {nuevoAlumno,mostrarAlumno,editarAlumno,eliminarAlumno,contadorAlumno,verAlumnoPorGrado} from "../controllers/alumno"

const router = Router()

router.post('/alumno',nuevoAlumno)
router.get('/alumno',mostrarAlumno)
router.put('/alumno/:id',editarAlumno)
router.delete('/alumno/:id',eliminarAlumno)
router.get('/alumno/contador',contadorAlumno)
router.get('/alumno/grado/:id',verAlumnoPorGrado)


export default router