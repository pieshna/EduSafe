import express from 'express';


//importamos rutas
import maestroRoutes from './routes/maestro'

const app= express();

//agregamos rutas
app.use(maestroRoutes)

export default app