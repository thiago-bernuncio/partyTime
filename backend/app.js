const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())

// DB Connection
const conn = require("./db/conn")

conn()

// Routes
const routes = require("./routes/router")

app.use("/api", routes)

app.listen(3000, function () {
    console.log("Servidor online")
})

// 3DMY6ATAu09kiYHX

// connerction string
//  mongodb+srv://thiagobernuncio:<password>@cluster0.cnplfmk.mongodb.net/

