const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Express Sample API with Swagger",
            version: "0.1.0",
            description:
                "This is API application made with Express and documented with Swagger",
            license: {
                name: "MIT"
            },
        },
        servers: [
            {
                url: "http://localhost:4001",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

module.exports = { options };