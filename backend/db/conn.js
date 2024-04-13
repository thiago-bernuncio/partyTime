const mongoose = require("mongoose")

async function main() {

    try {

        await mongoose.connect("mongodb+srv://thiagobernuncio:3DMY6ATAu09kiYHX@cluster0.cnplfmk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        console.log("Conectado ao banco!")

    } catch (error) {
        console.log(`Erro: ${error}`)
    }

}

module.exports = main