const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Metadata, información sobre nuestra API
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Arbeit API", version: "1.0.0" },
  },
  //Aquí van los grupos de endpoints
  apis: ["src/v1/routes/userRoutes.js", "src/database/User.js"],
};

// Documentación en formato JSON
const swaggerSpec = swaggerJSDoc(options);

// Función para configurar nuestros doscumento de swagger UI
const swaggerDocs = (app, port) => {
  // Para verlo como "pagina web"
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Para verlo en formato JSON, no es necesasrio
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerDocs);
  });

  console.log(`Documentos version 1: http://127.0.0.1:${port}/api/v1/docs`);
};

module.exports = { swaggerDocs };
