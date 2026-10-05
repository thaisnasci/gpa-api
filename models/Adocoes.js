import mongoose from 'mongoose'

const adocaoSchema = new mongoose.Schema({
    animalId: mongoose.Schema.Types.ObjectId,
    adotanteId: mongoose.Schema.Types.ObjectId,
    data: Date,
    status: String,
    observacao: String
})

const Adocao = mongoose.model('Adocao', adocaoSchema)

export default Adocao