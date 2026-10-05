import mongoose from 'mongoose'

const enderecoSchema = new mongoose.Schema({
    cidade: String,
    estado: String
})

const adotanteSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    endereco: enderecoSchema
})

const Adotante = mongoose.model('Adotante', adotanteSchema)

export default Adotante