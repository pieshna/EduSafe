import { Router } from "express";
import {mostrarMaestros,maestrosActuales,ingresarMaestro,editarMaestro,buscarMaestroMateria,consultarAsignacion,editarAsignacion,buscarMateriaMaestro,gradosAsignadosMaestro} from "../controllers/maestro"
import {consultarById,eliminarUsuario} from "../controllers/usuario"


const router = Router();

router.get("/maestro",mostrarMaestros);

router.get("/maestro/contador",maestrosActuales);
router.get("/maestro/asignacion/:id",consultarAsignacion);
router.get("/maestro/materia/:id",buscarMaestroMateria);
router.get("/maestro/vermateria/:id",buscarMateriaMaestro);
router.get("/maestro/gradosasignados/:id",gradosAsignadosMaestro);

router.get("/maestro/:id",consultarById);

router.post("/maestro",ingresarMaestro);

router.put("/maestro/:id",editarMaestro);
router.put("/maestro/asignacion/:id",editarAsignacion);

router.delete("/maestro/:id",eliminarUsuario);

export default router;
