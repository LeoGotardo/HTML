import express from "express";

const app = express()

app.use("/", express.static("./public"))

app.listen(3000, ()=>console.log("http://localhost:3000"))

function abrirArquivo() {
    // Obtém o arquivo Python selecionado pelo usuário
    const arquivo = document.getElementById("arquivo").files[0];
  
    // Abre o arquivo no navegador
    window.open(arquivo.path);
  }