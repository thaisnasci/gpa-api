const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "GPA API",
            description: "API para gerenciamento de animais, adotantes e adoções do GPA",
            version: "1.0.0",
            contact: {
                name: "Thais"
            }
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },

    apis: [
        "./routes/*.js",
        "./docs/swaggerDocs.yaml"
    ]
}

export default swaggerOptions