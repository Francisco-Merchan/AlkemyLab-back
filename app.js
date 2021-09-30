const express = require("express");
const cors = require("cors");
const operationsRoutes = require("./Routes/operationsRoutes");
const conectDB = require("./config/db");
conectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/operations", operationsRoutes);

app.listen(7500, () => {
  console.log("hola desde el servidor");
});
