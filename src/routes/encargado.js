import { Router } from "express";
import {ingresarEncargado,buscarEncargado} from "../controllers/encargado"

const router = Router()

router.get("/encargado/buscar/:id",buscarEncargado)



export default router