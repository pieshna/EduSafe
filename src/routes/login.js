import {Router} from 'express'
import {iniciarSesion} from '../controllers/login'

const router = Router()

router.post('/login',iniciarSesion)
router.get('/ver',(req, res)=>{
})


export default router