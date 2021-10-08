import {ingresarCarrera,verCarreras,editarCarrera} from "../controllers/carrera"
import {Router} from "express"
const router= Router()

router.post('/carrera',ingresarCarrera)
router.get('/carrera/:id',verCarreras)
router.put('/carrera/:id',editarCarrera)





export default router