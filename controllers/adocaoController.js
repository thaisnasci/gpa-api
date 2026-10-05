import adocaoService from "../services/adocaoService.js";
import { ObjectId } from "mongodb";

// Listando todas as adoções
const getAllAdocoes = async (req, res) => {
  try {
    const adocoes = await adocaoService.getAll();
    res.status(200).json({ adocoes: adocoes });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// Cadastrando uma adoção
const createAdocao = async (req, res) => {
  try {
    const { animalId, adotanteId, data, status, observacao } = req.body;

    await adocaoService.Create(animalId, adotanteId, data, status, observacao);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// Deletando uma adoção
const deleteAdocao = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;

      adocaoService.Delete(id);

      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// Alterando uma adoção
const updateAdocao = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;

      const { animalId, adotanteId, data, status, observacao } = req.body;

      adocaoService.Update(id, animalId, adotanteId, data, status, observacao);

      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// Listando uma única adoção
const getOneAdocao = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;

      const adocao = await adocaoService.getOne(id);

      if (!adocao) {
        res.sendStatus(404);
      } else {
        res.status(200).json({ adocao });
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
  getAllAdocoes,
  createAdocao,
  deleteAdocao,
  updateAdocao,
  getOneAdocao,
};
