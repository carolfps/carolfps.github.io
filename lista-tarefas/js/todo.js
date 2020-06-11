let addTarefa = document.querySelector('#addTarefa')
let inputTextoTarefa = document.querySelector('#textoTarefa')
const listaTodo = { todos:[] }

function criarElementos(tarefa){
    let card = document.createElement('div')
    card.setAttribute('class', 'card border-0 m-2')

    let cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body d-flex justify-content-between align-items-center')

    let cardTexto = document.createElement('p')
    cardTexto.setAttribute('class', 'my-0')
    cardTexto.textContent = tarefa

    let iconeExcluir = document.createElement('span')
    iconeExcluir.setAttribute('class', 'material-icons text-secondary excluir')
    iconeExcluir.setAttribute('title', 'deletar')
    iconeExcluir.textContent = "delete"
    iconeExcluir.onclick = function(event){
        posDelete = Array.from(card.parentNode.children).indexOf(card)
        let valoresSalvos = JSON.parse(window.localStorage.getItem('@lista-tarefas-app/listaTodo'))
        valoresSalvos.todos.splice(posDelete,1)
        window.localStorage.setItem('@lista-tarefas-app/listaTodo', JSON.stringify(valoresSalvos))

        card.remove()
    }

    card.appendChild(cardBody)
    cardBody.appendChild(cardTexto)
    cardBody.appendChild(iconeExcluir)

    let container = document.querySelector('#tarefas')
    container.appendChild(card)
}

function carregarLista(){

    let listaSalva = JSON.parse(window.localStorage.getItem('@lista-tarefas-app/listaTodo'))

    if(listaSalva){

        listaSalva.todos.map((tarefaSalva)=>{

            criarElementos(tarefaSalva.texto)

            listaTodo.todos.push({texto: tarefaSalva.texto})
        })
    }
}

function adicionarTarefa(){
    let texto = inputTextoTarefa.value
    
    if(texto.length >0){

        criarElementos(texto)
    
        inputTextoTarefa.value=""

        listaTodo.todos.push({texto: texto})
        window.localStorage.setItem('@lista-tarefas-app/listaTodo', JSON.stringify(listaTodo))

    } else{
        alert("Você deve digitar uma tarefa primeiro")
    }
}

carregarLista()

addTarefa.onclick = adicionarTarefa

inputTextoTarefa.onkeyup = function(event){

    if(event.key == 'Enter'){

        adicionarTarefa()

    }

}