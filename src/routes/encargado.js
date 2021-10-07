import { Router } from "express";
import {ingresarEncargado,buscarEncargado,ingresarEncargadoExistente,buscarEncargadoPorEstudiante} from "../controllers/encargado"

const router = Router()

router.get("/encargado/buscar/:id",buscarEncargado)
router.post("/encargado/existente",ingresarEncargadoExistente)
router.get("/encargado/estudiante/:id",buscarEncargadoPorEstudiante)



export default router