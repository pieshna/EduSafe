import { Router } from "express";
import { nuevoGrado,verGrado,verGradoPorId,verGradoPorCiclo,editarGrado,eliminarGrado,verGradoPorCarrera,verCarreras,verGradoPorestudiante,verAlumnoPorGrado } from "../controllers/grado";

const router = Router()

router.get('/grado',verGrado)
router.get('/carrera',verCarreras)
router.get('/grado/:id',verGradoPorId)
router.get('/grado/ciclo/:id',verGradoPorCiclo)
router.post('/grado',nuevoGrado)
router.put('/grado/:id',editarGrado)
router.delete('/grado/:id',eliminarGrado)
router.get('/grado/carrera/:id',verGradoPorCarrera)
router.get('/grado/estudiante/:id',verGradoPorestudiante)
router.get('/grado/contar/estudiante/:id',verAlumnoPorGrado)

export default router
