import { Router } from "express";
import {mostrarMaestros,maestrosActuales,ingresarMaestro,editarMaestro,buscarMaestroMateria} from "../controllers/maestro"
import {consultarById,eliminarUsuario} from "../controllers/usuario"


const router = Router();

router.get("/maestro",mostrarMaestros);

router.get("/maestro/contador",maestrosActuales);
router.get("/maestro/materia/:id",buscarMaestroMateria);

router.get("/maestro/:id",consultarById);

router.post("/maestro",ingresarMaestro);

router.put("/maestro/:id",editarMaestro);

router.delete("/maestro/:id",eliminarUsuario);

export default router;
