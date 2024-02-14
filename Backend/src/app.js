import express from "express";
import CategoriaRoutes from "./routes/Categoria.routes.js";

const app = express();

app.set("port", 5001);

//Middleware
app.use(express.json());

app.use("/api/categorias",CategoriaRoutes);

export default app;