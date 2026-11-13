const express = require("express"); //es la forma clasica de importar express module.
const swaggerUi = require("swagger-ui-express");
const openapi = require("./docs/openapi.js");
const app = express();
const PORT = process.env.PORT || 3000;

//ruta para la documentacion de la API
app.use("/", swaggerUi.serve, swaggerUi.setup(openapi));
 
//req(request) re (response) res.json(respuesta en forma JSON)
//arrow funcion
app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde mi API" });
});

app.get("/api/yo", (req, res) => {
  res.json({ nombre: "Leo Steep Pacho Lopez", carrera: "Ingeniería en Software" });
});

app.get("/api/edad/:anio", (req, res) => {
  const anioActual = new Date().getFullYear();
  const año = parseInt(req.params.anio);
  if (!Number.isInteger(año) || año < 1900 || año > anioActual) {
    return res.status(400).json({ error: "Año invalido" });
  }
  const edad = anioActual - año;
  res.json({
    anioNacimiento: año,
    edad: edad
  });
});

app.listen(PORT, () => console.log("API lista"));
