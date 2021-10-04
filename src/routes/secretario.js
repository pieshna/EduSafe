import {Router} from 'express';
import { contadorSecretario } from '../controllers/secretario';

const router = Router()

router.get("/secretario/contador",contadorSecretario)


export default router