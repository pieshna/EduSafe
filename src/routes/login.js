import {Router} from 'express'
import {iniciarSesion} from '../controllers/login'

const router = Router()

router.get('/login',iniciarSesion)


export default router