let addTarefa = document.querySelector('#addTarefa')
let inputTextoTarefa = document.querySelector('#textoTarefa')

function adicionarTarefa(){
    let texto = inputTextoTarefa.value
    
    if(texto.length >0){

        let card = document.createElement('div')
        card.setAttribute('class', 'card border-0 m-2')
    
        let cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body d-flex justify-content-between align-items-center')
    
        let iconeExcluir = document.createElement('span')
        iconeExcluir.setAttribute('class', 'material-icons text-secondary excluir')
        iconeExcluir.textContent = "delete"
        iconeExcluir.onclick = function(event){
            card.remove()
        }
    
    
        card.appendChild(cardBody)
        cardBody.textContent = texto
        cardBody.appendChild(iconeExcluir)
    
        let container = document.querySelector('#tarefas')
        container.appendChild(card)
    
        inputTextoTarefa.value=""
    } else{
        alert("Você deve digitar uma tarefa primeiro")
    }
}


addTarefa.onclick = adicionarTarefa

inputTextoTarefa.onkeyup = function(event){

    if(event.key == 'Enter'){

        adicionarTarefa()

    }

}