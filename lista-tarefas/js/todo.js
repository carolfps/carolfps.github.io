let addTarefa = document.querySelector('#addTarefa')
let inputTextoTarefa = document.querySelector('#textoTarefa')

function adicionarTarefa(){
    let texto = inputTextoTarefa.value
    
    if(texto.length >0){

        let card = document.createElement('div')
        card.setAttribute('class', 'card border-0 m-2')
        card.setAttribute('title', 'Clique no cartão para trocar sua cor')
        let cont = 0
        card.onclick = (event) => {
            const colors = ['#2C65F5','#CF000F','#45F5B5','#F6BF6A']
            const pos = cont%(colors.length)
            card.style = `border-top: 8px solid ${colors[pos]} !important`
            cont++
        }
    
        let cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body d-flex justify-content-between align-items-center')
    
        let iconeExcluir = document.createElement('span')
        iconeExcluir.setAttribute('class', 'material-icons text-secondary excluir')
        iconeExcluir.setAttribute('title', 'deletar')
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