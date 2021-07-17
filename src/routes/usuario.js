import { Router } from "express";
import {consultarUsuario,consultarById,consultarByRol,ingresarUsuario,eliminarUsuario,editarUsuario} from "../controllers/usuario"

const router=Router()

router.get('/usuario',consultarUsuario)

router.get('/usuario/:id',consultarById)

router.get('/usuario/rol/:id',consultarByRol)

router.post('/usuario',ingresarUsuario)

router.delete('/usuario/:id',eliminarUsuario)

router.put('/usuario/:id',editarUsuario)

export default router

