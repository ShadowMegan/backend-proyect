const express = require("express"); //es la forma clasica de importar express module.
const swaggerUi = require("swagger-ui-express");
const openapi = require("./docs/openapi.js");
const app = express();
const PORT = process.env.PORT || 3000;

//ruta para la documentacion de la API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapi));
 
//req(request) re (response) res.json(respuesta en forma JSON)
//arrow funcion
app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde mi API" });
});

app.listen(PORT, () => console.log("API lista"));
