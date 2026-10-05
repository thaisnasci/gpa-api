import adotanteService from "../services/adotanteService.js";
import { ObjectId } from "mongodb";

// Listando todos os adotantes
const getAllAdotantes = async (req, res) => {
  try {
    const adotantes = await adotanteService.getAll();
    res.status(200).json({ adotantes: adotantes });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// Cadastrando um adotante
const createAdotante = async (req, res) => {
  try {
    const { nome, email, telefone, endereco } = req.body;

    await adotanteService.Create(nome, email, telefone, endereco);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// Deletando um adotante
const deleteAdotante = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;

      adotanteService.Delete(id);

      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// Alterando um adotante
const updateAdotante = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;

      const { nome, email, telefone, endereco } = req.body;

      adotanteService.Update(id, nome, email, telefone, endereco);

      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// Listando um único adotante
const getOneAdotante = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;

      const adotante = await adotanteService.getOne(id);

      if (!adotante) {
        res.sendStatus(404);
      } else {
        res.status(200).json({ adotante });
      }
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default {
  getAllAdotantes,
  createAdotante,
  deleteAdotante,
  updateAdotante,
  getOneAdotante,
};
