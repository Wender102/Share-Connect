function enviarArquivo() {
    //# Caso o user não tenha uma conta
    if(emailUser == undefined) {
        fazerLogin().then(() => {
            enviarArquivo()
        })
    } else {
        
    }
}