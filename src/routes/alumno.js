import { Router } from "express";
import {nuevoAlumno,mostrarAlumno,editarAlumno,eliminarAlumno,contadorAlumno,verAlumnoPorGrado,mostrarEstudiantePorId} from "../controllers/alumno"

const router = Router()

router.post('/alumno',nuevoAlumno)
router.get('/alumno',mostrarAlumno)
router.get('/alumno/:id',mostrarEstudiantePorId)
router.put('/alumno/:id',editarAlumno)
router.delete('/alumno/:id',eliminarAlumno)
router.get('/alumno/contador',contadorAlumno)
router.get('/alumno/grado/:id',verAlumnoPorGrado)


export default router