const express = require("express");
const swaggerUi = require("swagger-ui-express");
const openapi = require("./docs/openapi.js");
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Primero tus rutas de la API
app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde mi API" });
});

app.get("/api/yo", (req, res) => {
  res.json({ nombre: "Leo Steep Pacho Lopez", carrera: "Ingeniería en Software" });
});

app.get("/api/edad/:anio", (req, res) => {
  const anioActual = new Date().getFullYear();
  const anio = parseInt(req.params.anio);
  if (!Number.isInteger(anio) || anio < 1900 || anio > anioActual) {
    return res.status(400).json({ error: "Año invalido" });
  }
  const edad = anioActual - anio;
  res.json({
    anioNacimiento: anio,
    edad: edad
  });
});

// 2. Después la documentación de Swagger
app.use("/", swaggerUi.serve, swaggerUi.setup(openapi));

app.listen(PORT, () => console.log("API lista"));