import animalService from '../services/animalService.js'
import { ObjectId } from 'mongodb'

// Listando todos os animais
const getAllAnimals = async (req, res) => {
    try {
        const animals = await animalService.getAll()
        res.status(200).json({ animals: animals })
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

// Cadastrando um animal
const createAnimal = async (req, res) => {
    try {
        const {
            nome,
            especie,
            sexo,
            status,
            descricao,
            idade,
            peso,
            raca,
            caracteristicas
        } = req.body

        await animalService.Create(
            nome,
            especie,
            sexo,
            status,
            descricao,
            idade,
            peso,
            raca,
            caracteristicas
        )

        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

// Deletando um animal
const deleteAnimal = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id

            await animalService.Delete(id)

            res.sendStatus(204)
        } else {
            res.sendStatus(400)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

// Alterando um animal
const updateAnimal = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id

            const {
                nome,
                especie,
                sexo,
                status,
                descricao,
                idade,
                peso,
                raca,
                caracteristicas
            } = req.body

            await animalService.Update(
                id,
                nome,
                especie,
                sexo,
                status,
                descricao,
                idade,
                peso,
                raca,
                caracteristicas
            )

            res.sendStatus(200)
        } else {
            res.sendStatus(400)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

// Listando um único animal
const getOneAnimal = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id

            const animal = await animalService.getOne(id)

            if (!animal) {
                res.sendStatus(404)
            } else {
                res.status(200).json({ animal })
            }
        } else {
            res.sendStatus(400)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export default {
    getAllAnimals,
    createAnimal,
    deleteAnimal,
    updateAnimal,
    getOneAnimal
}