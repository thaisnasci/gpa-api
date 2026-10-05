import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "node:dns";

dotenv.config();
//Problema com DNS do MongoDB Atlas, resolvido com a configuração de servidores DNS públicos
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado ao MongoDB com sucesso!");
    } catch (error) {
        console.log("Erro ao conectar com o MongoDB:", error);
    }
};

connect();

export default mongoose;