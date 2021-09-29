import mysql from "mysql2/promise";
import { config } from "./config.js";

export const connect = async () => {
  //console.log("creamos conexion");
   const conexion=await mysql.createConnection(config);
   await setTimeout(()=>{
     try {
        conexion.end()
       //console.log("cerramos base de datos");
     } catch (error) {
       console.log(error);
     }
   },1500)
  return conexion
};


//connect();