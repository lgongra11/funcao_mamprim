function simularDownload(nomeArquivo, callbackConclusao) {
    console.log(`Iniciando download de ${nomeArquivo}...`)
    setTimeout(() => {
        callbackConclusao()
    }, 1500);
}

function mensagem() {
    console.log("✅ Download finalizado com sucesso no disco!")
}

simularDownload("dados_clientes.csv", mensagem)