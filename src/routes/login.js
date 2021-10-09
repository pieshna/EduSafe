import {Router} from 'express'
import {iniciarSesion} from '../controllers/login'

const router = Router()

router.post('/login',iniciarSesion)


export default router