import Animal from "../models/Animals.js"

class animalService {

    async getAll() {
        try {
            const animals = await Animal.find()
            return animals
        } catch (error) {
            console.log(error)
        }
    }

    async Create(nome, especie, sexo, status, descricao, idade, peso, raca, caracteristicas) {
        try {
            const newAnimal = new Animal({
                nome,
                especie,
                sexo,
                status,
                descricao,
                idade,
                peso,
                raca,
                caracteristicas
            })

            await newAnimal.save()
        } catch (error) {
            console.log(error)
        }
    }

    async Delete(id) {
        try {
            await Animal.findByIdAndDelete(id)
            console.log(`Animal com a id: ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }
    }

    async Update(id, nome, especie, sexo, status, descricao, idade, peso, raca, caracteristicas) {
        try {
            await Animal.findByIdAndUpdate(id, {
                nome,
                especie,
                sexo,
                status,
                descricao,
                idade,
                peso,
                raca,
                caracteristicas
            })

            console.log(`Dados do animal com id: ${id} alterados com sucesso.`)
        } catch (error) {
            console.log(error)
        }
    }

    async getOne(id) {
        try {
            const animal = await Animal.findOne({ _id: id })
            return animal
        } catch (error) {
            console.log(error)
        }
    }
}

export default new animalService()