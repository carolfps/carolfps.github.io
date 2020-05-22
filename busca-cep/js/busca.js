let busca = document.getElementById('procurar')
//let cep = document.getElementById('cep')

let rua = document.getElementById('rua')
let numero = document.getElementById('numero')
let complemento = document.getElementById('complemento')
let bairro = document.getElementById('bairro')
let uf = document.getElementById('uf')

//utilizando jQuery
let cep = $('#cep')
cep.on('keyup', async (event) =>{
    if(cep[0].value.length == 8){

        let enderecoDados = await fetch(`https://viacep.com.br/ws/${cep[0].value}/json/`)
        let dados = await enderecoDados.json()

        rua.value = dados.logradouro
        numero.value = dados.unidade
        complemento.value = dados.complemento
        bairro.value = dados.bairro
        uf.value = dados.uf
    } else if(cep[0].value.length == 0){
        rua.value = ""
        numero.value = ""
        complemento.value = ""
        bairro.value = ""
        uf.value = ""
    }
})

// // Quando o cep tiver 8 caracteres já dispara a funcao
// cep.onkeyup = async (event) => {

//     if(cep.value.length == 8){

//         let enderecoDados = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
//         let dados = await enderecoDados.json()

//         rua.value = dados.logradouro
//         numero.value = dados.unidade
//         complemento.value = dados.complemento
//         bairro.value = dados.bairro
//         uf.value = dados.uf
//     }
// }

// busca.onclick = async function buscarCep(){
    
//     let valorCep = cep.value
//     let rua = document.getElementById('rua')
//     let numero = document.getElementById('numero')
//     let complemento = document.getElementById('complemento')
//     let bairro = document.getElementById('bairro')
//     let uf = document.getElementById('uf')

//     let enderecoDados = await fetch('https://viacep.com.br/ws/'+ valorCep + '/json/')
//     let dados = await enderecoDados.json()

//     rua.value = dados.logradouro
//     numero.value = dados.unidade
//     complemento.value = dados.complemento
//     bairro.value = dados.bairro
//     uf.value = dados.uf

// }