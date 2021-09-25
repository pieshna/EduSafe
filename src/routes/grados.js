import { Router } from "express";
import { nuevoGrado,verGrado,verGradoPorId,verGradoPorCiclo,editarGrado,eliminarGrado } from "../controllers/grado";

const router = Router()

router.get('/grado',verGrado)
router.get('/grado/:id',verGradoPorId)
router.get('/grado/ciclo/:id',verGradoPorCiclo)
router.post('/grado',nuevoGrado)
router.put('/grado/:id',editarGrado)
router.delete('/grado/:id',eliminarGrado)


export default router
