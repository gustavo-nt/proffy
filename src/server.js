// Servidor
const express = require('express');
const server = express();

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// Configurar Nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// Receber os dados do req.body
    .use(express.urlencoded({ extended: true }))
    // Configurar arquivos estáticos (CSS, Scripts, Imagens)
    .use(express.static("public"))
    // Rotas da Aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(5500)