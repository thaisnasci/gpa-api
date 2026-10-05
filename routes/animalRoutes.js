import express from "express";
const animalRoutes = express.Router();

import animalController from "../controllers/animalController.js";

// Endpoint para listar todos os animais
animalRoutes.get("/animais", animalController.getAllAnimals);

// Endpoint para cadastrar um animal
animalRoutes.post("/animal", animalController.createAnimal);

// Endpoint para deletar um animal
animalRoutes.delete("/animal/:id", animalController.deleteAnimal);

// Endpoint para alterar um animal
animalRoutes.put("/animal/:id", animalController.updateAnimal);

// Endpoint para listar um único animal
animalRoutes.get("/animal/:id", animalController.getOneAnimal);

export default animalRoutes;
