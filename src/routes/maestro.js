import { Router } from "express";
import {mostrarMaestros,maestrosActuales,ingresarMaestro,editarMaestro} from "../controllers/maestro"
import {consultarById,eliminarUsuario} from "../controllers/usuario"


const router = Router();

router.get("/maestro",mostrarMaestros);

router.get("/maestro/count",maestrosActuales);

router.get("/maestro/:id",consultarById);

router.post("/maestro",ingresarMaestro);

router.put("/maestro/:id",editarMaestro);

router.delete("/maestro/:id",eliminarUsuario);

export default router;
