import upload from '../componentes/ManejoDeArchivos'
import fs from 'fs'
import {Router} from 'express'
import path from 'path'

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
  const dirPath=path.join(__dirname, '..','/upload/')
  router.get('/ver/:id', (req, res, next) => {
  res.writeHead(200)
  //console.log("envio");
  fs.createReadStream(dirPath+req.params.id).pipe(res)
  })



export default router
