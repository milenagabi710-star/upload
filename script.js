const inputUpload = document.getElementById('avatar')

inputUpload.addEventListener('change', function (evento) {

    const arquivo = evento.target.files[0]

    if (arquivo) {
        const nomeDaImagem = arquivo.name

        console.log(nomeDaImagem)
    } else {
        console.log("Nenhum arquivo selecionado.");
    }
})

const nome = document.getElementById("nome")
const b = document.getElementById("btn")
b.addEventListener("click", () => {
console.log(nome.value)
})

async function criarUsuario() {
    const novoUsuario = {nome: 'ana', idade: 25
    const resposta = await fetch ('https://exemplo.com',
         method: 'POST',
         Header {
            'Content-Type': 'application/json'
         },  
         body: JSON .stringify(novoUsuario) {

         } resultado = await resposta.JSON
         console.log('Criando com sucesso', resultado);
        )    
        
    }
    
}