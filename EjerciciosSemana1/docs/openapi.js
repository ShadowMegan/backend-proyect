module.exports = {
  openapi: "3.0.0",
  info: {
    title: "mi primer API en express",
    version: "1.0.0",
    description: "Backend Developer Web"
  },
  paths: {
    "/api/saludo": {
      get: {
        tags: ["General"],
        summary: "Devuelve un saludo",
        responses: {
          200: {
            description: "Devuelve un saludo correctamente",
            content: {
              "application/json": {
                example: { mensaje: "Hola desde mi API" }
              }
            }
          }
        }
      }
    },
    "/api/yo": {
      get: {
        tags: ["Usuario"],
        summary: "Devuelve tu nombre y carrera",
        responses: {
          200: {
            description: "Datos personales obtenidos correctamente",
            content: {
              "application/json": {
                example: {
                  nombre: "Leo Steep Pacho",
                  carrera: "Ingenieria en Software"
                }
              }
            }
          }
        }
      }
    },
    "/api/edad/{año}": {
      get: {
        tags: ["Edad"],
        summary: "Calcula la edad a partir del año de nacimiento",
        parameters: [
          {
            name: "año",
            in: "path",
            required: true,
            description: "Año de nacimiento 2005",
            schema: {
              type: "integer"
            }
          }
        ],
        responses: {
          200: {
            description: "Edad calculada correctamente",
            content: {
              "application/json": {
                example: {
                  anioNacimiento: 2005,
                  edad: 21
                }
              }
            }
          },
          400: {
            description: "Año inválido"
          }
        }
      }
    }
  }
};