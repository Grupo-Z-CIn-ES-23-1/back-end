require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for FloodForecasting APP",
    version: "1.0.0",
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use(cors());

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// DB Connection
const conn = require("./db/conn");
conn();

//Routes
const routes = require("./routes/router");
app.use("/api", routes);

module.exports = app;
