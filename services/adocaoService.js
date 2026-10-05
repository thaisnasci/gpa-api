import Adocao from "../models/Adocoes.js"

class adocaoService {

    async getAll() {
        try {
            const adocoes = await Adocao.find()
            return adocoes
        } catch (error) {
            console.log(error)
        }
    }

    async Create(animalId, adotanteId, data, status, observacao) {
        try {
            const newAdocao = new Adocao({
                animalId,
                adotanteId,
                data,
                status,
                observacao
            })

            await newAdocao.save()

        } catch (error) {
            console.log(error)
        }
    }

    async Delete(id) {
        try {
            await Adocao.findByIdAndDelete(id)
            console.log(`Adoção com a id: ${id} foi deletada.`)
        } catch (error) {
            console.log(error)
        }
    }

    async Update(id, animalId, adotanteId, data, status, observacao) {
        try {
            await Adocao.findByIdAndUpdate(id, {
                animalId,
                adotanteId,
                data,
                status,
                observacao
            })

            console.log(`Dados da adoção com id: ${id} alterados com sucesso.`)

        } catch (error) {
            console.log(error)
        }
    }

    async getOne(id) {
        try {
            const adocao = await Adocao.findOne({ _id: id })
            return adocao
        } catch (error) {
            console.log(error)
        }
    }
}

export default new adocaoService()