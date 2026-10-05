import express from "express";
const adocaoRoutes = express.Router();

import adocaoController from "../controllers/adocaoController.js";

// Endpoint para listar todas as adoções
adocaoRoutes.get("/adocoes", adocaoController.getAllAdocoes);

// Endpoint para cadastrar uma adoção
adocaoRoutes.post("/adocao", adocaoController.createAdocao);

// Endpoint para deletar uma adoção
adocaoRoutes.delete("/adocao/:id", adocaoController.deleteAdocao);

// Endpoint para alterar uma adoção
adocaoRoutes.put("/adocao/:id", adocaoController.updateAdocao);

// Endpoint para listar uma única adoção
adocaoRoutes.get("/adocao/:id", adocaoController.getOneAdocao);

export default adocaoRoutes;