module.express ={
    openapi: "3.0.0",
    info: {
        tittle: "mi primer API en express",
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
                                example: {
                                    mensaje: "Hola desde mi API"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}