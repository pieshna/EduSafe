import express from 'express';


//importamos rutas
import maestroRoutes from './routes/maestro'
import usuarioRoutes from './routes/usuario'
import loginRoutes from './routes/login'
import materiaRoutes from './routes/materia'
import gradoRoutes from './routes/grados'

const app= express();

app.use(express.json())

//agregamos rutas
app.use(maestroRoutes)
app.use(usuarioRoutes)
app.use(loginRoutes)
app.use(materiaRoutes)
app.use(gradoRoutes)

export default app