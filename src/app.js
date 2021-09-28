import express from 'express';


//importamos rutas
import maestroRoutes from './routes/maestro'
import usuarioRoutes from './routes/usuario'
import loginRoutes from './routes/login'
import materiaRoutes from './routes/materia'
import gradoRoutes from './routes/grados'
import alumnoRoutes from './routes/alumno'

const app= express();

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json())

//agregamos rutas
app.use(maestroRoutes)
app.use(usuarioRoutes)
app.use(loginRoutes)
app.use(materiaRoutes)
app.use(gradoRoutes)
app.use(alumnoRoutes)


export default app