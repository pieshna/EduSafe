import upload from '../componentes/ManejoDeArchivos'
import {Router} from 'express'

const router = Router()



router.post('/upload/foto', upload.single('foto'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file)
   
  })

router.post('/upload/', upload.single('archivo',10), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file)
   
  })



export default router
