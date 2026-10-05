import express from "express";
const adotanteRoutes = express.Router();

import adotanteController from "../controllers/adotanteController.js";

// Endpoint para listar todos os adotantes
adotanteRoutes.get("/adotantes", adotanteController.getAllAdotantes);

// Endpoint para cadastrar um adotante
adotanteRoutes.post("/adotante", adotanteController.createAdotante);

// Endpoint para deletar um adotante
adotanteRoutes.delete("/adotante/:id", adotanteController.deleteAdotante);

// Endpoint para alterar um adotante
adotanteRoutes.put("/adotante/:id", adotanteController.updateAdotante);

// Endpoint para listar um único adotante
adotanteRoutes.get("/adotante/:id", adotanteController.getOneAdotante);

export default adotanteRoutes;