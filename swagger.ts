import swaggerJsdoc from "swagger-jsdoc"

export const swaggerSpec = swaggerJsdoc(
    {
        definition: {
            info: {
                version: "1.0",
                title: "ShopAPI",
                description: "tdfgdfgdf"
            }
        },
        apis: ["./routes/*.ts"]
    }
)