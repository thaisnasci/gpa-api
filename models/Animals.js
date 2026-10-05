import mongoose from 'mongoose'

const caracteristicaSchema = new mongoose.Schema({
    porte: String,
    cor: String,
    castrado: Boolean,
    vacinado: Boolean
})

const animalSchema = new mongoose.Schema({
    nome: String,
    especie: String,
    sexo: String,
    status: String,
    descricao: String,
    idade: Number,
    peso: Number,
    raca: String,
    caracteristicas: [caracteristicaSchema]
})

const Animal = mongoose.model('Animal', animalSchema)

export default Animal