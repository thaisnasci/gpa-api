import Adotante from "../models/Adotantes.js"

class adotanteService {

    async getAll() {
        try {
            const adotantes = await Adotante.find()
            return adotantes
        } catch (error) {
            console.log(error)
        }
    }

    async Create(nome, email, telefone, endereco) {
        try {
            const newAdotante = new Adotante({
                nome,
                email,
                telefone,
                endereco
            })

            await newAdotante.save()

        } catch (error) {
            console.log(error)
        }
    }

    async Delete(id) {
        try {
            await Adotante.findByIdAndDelete(id)
            console.log(`Adotante com a id: ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }
    }

    async Update(id, nome, email, telefone, endereco) {
        try {
            await Adotante.findByIdAndUpdate(id, {
                nome,
                email,
                telefone,
                endereco
            })

            console.log(`Dados do adotante com id: ${id} alterados com sucesso.`)

        } catch (error) {
            console.log(error)
        }
    }

    async getOne(id) {
        try {
            const adotante = await Adotante.findOne({ _id: id })
            return adotante
        } catch (error) {
            console.log(error)
        }
    }
}

export default new adotanteService()