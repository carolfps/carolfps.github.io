let addTarefa = document.querySelector('#addTarefa')
let inputTextoTarefa = document.querySelector('#textoTarefa')
const listaTodo = { todos:[] }

function criarElementos(tarefa){
    let card = document.createElement('div')
    card.setAttribute('class', 'card border-0 m-2')

    let cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body d-flex align-items-center')

    let cardTexto = document.createElement('p')
    cardTexto.setAttribute('class', 'my-0 mr-auto')
    cardTexto.textContent = tarefa

    let iconeEditar = document.createElement('span')
    iconeEditar.setAttribute('class', 'material-icons text-secondary editar mr-1')
    iconeEditar.setAttribute('title', 'editar')
    iconeEditar.textContent = "edit"
    iconeEditar.onclick = function(event){
        
        let btnEdit = event.srcElement
        let btnDelete = btnEdit.nextSibling
        let divParent = event.srcElement.parentNode
        let pTarefa = cardTexto.textContent
        cardTexto.remove()

        let cardInput = document.createElement('textarea')
        cardInput.innerText = pTarefa
        divParent.insertBefore(cardInput, btnEdit)

        iconeEditar.remove()
        let iconeOk = document.createElement('span')
        iconeOk.setAttribute('class', 'material-icons text-secondary editar mr-1')
        iconeOk.setAttribute('title', 'confirmar')
        iconeOk.textContent = "check_circle"
        divParent.insertBefore(iconeOk, btnDelete)

        iconeOk.onclick = function(event){

            let tarefaEdit = cardInput.value

            if(tarefaEdit.length > 0){

                let cardTexto = document.createElement('p')
                cardTexto.setAttribute('class', 'my-0 mr-auto')
                cardTexto.textContent = tarefaEdit
    
                divParent.insertBefore(cardTexto, iconeOk)
                cardInput.remove()
    
                divParent.insertBefore(iconeEditar,btnDelete)
                iconeOk.remove()
    
                let posEdit = Array.from(card.parentNode.children).indexOf(card)
                let valoresSalvos = JSON.parse(window.localStorage.getItem('@lista-tarefas-app/listaTodo'))
                valoresSalvos.todos[posEdit] = {texto: cardTexto.innerText}
                window.localStorage.setItem('@lista-tarefas-app/listaTodo', JSON.stringify(valoresSalvos))

            } else{
                alert("O texto não pode ser vazio!")
            }

        }

        cardInput.onkeyup = function(event){

            if(event.key == 'Enter'){
        
                let tarefaEdit = cardInput.value

                if(tarefaEdit.length > 0){

                    cardTexto = document.createElement('p')
                    cardTexto.setAttribute('class', 'my-0 mr-auto')
                    cardTexto.textContent = tarefaEdit
        
                    divParent.insertBefore(cardTexto, iconeOk)
                    cardInput.remove()
        
                    divParent.insertBefore(iconeEditar,btnDelete)
                    iconeOk.remove()
        
                    let posEdit = Array.from(card.parentNode.children).indexOf(card)
                    let valoresSalvos = JSON.parse(window.localStorage.getItem('@lista-tarefas-app/listaTodo'))
                    valoresSalvos.todos[posEdit] = {texto: cardTexto.innerText}
                    window.localStorage.setItem('@lista-tarefas-app/listaTodo', JSON.stringify(valoresSalvos))

                } else{
                    alert("O texto não pode ser vazio!")
                }
        
            }
        
        }


    }

    let iconeExcluir = document.createElement('span')
    iconeExcluir.setAttribute('class', 'material-icons text-secondary excluir')
    iconeExcluir.setAttribute('title', 'deletar')
    iconeExcluir.textContent = "delete"
    iconeExcluir.onclick = function(event){
        let posDelete = Array.from(card.parentNode.children).indexOf(card)
        let valoresSalvos = JSON.parse(window.localStorage.getItem('@lista-tarefas-app/listaTodo'))
        valoresSalvos.todos.splice(posDelete,1)
        window.localStorage.setItem('@lista-tarefas-app/listaTodo', JSON.stringify(valoresSalvos))

        card.remove()
    }

    card.appendChild(cardBody)
    cardBody.appendChild(cardTexto)
    cardBody.appendChild(iconeEditar)
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