let listaDeTeclas = document.querySelectorAll('.tecla')
let conta = document.querySelector('.visor-conta')
let efetueiConta = 0
let efetueiOp = 0
let valorConta = 0
let lang = navigator.language || navigator.userLanguage

listaDeTeclas.forEach(botao =>{
    botao.onclick = () =>{

        if(botao.textContent == "CE"){

            conta.innerHTML = 0
            efetueiConta = 0
            efetueiOp = 0

        } else if(botao.textContent == "C"){

            let valorAtual = Number(conta.innerText)

            if((valorAtual>=0 && valorAtual<10) || (valorAtual<=0 && valorAtual>-10) || efetueiConta == 1){

                conta.innerHTML = 0

            } else{

                conta.innerHTML = conta.innerHTML.slice(0, -1);

            }

        } else if(efetueiConta == 1 && botao.textContent != "="){
            
            conta.innerHTML = 0
            efetueiConta = 0
            if(['/','+','-'].includes(botao.textContent)){
                
                conta.append(botao.textContent)
                efetueiOp = 1

            } else if(botao.textContent == "x"){

                efetueiOp = 1
                conta.append('*')

            } else{

                conta.innerHTML = botao.textContent

            }

        } else if(['/','+','-'].includes(botao.textContent)){
           
            if(efetueiOp == 0){
                conta.append(botao.textContent)
                efetueiOp = 1
            }

        } else if(botao.textContent == "x"){

            if(efetueiOp == 0){
                conta.append('*')
                efetueiOp = 1
            }

        } else if(botao.textContent == "="){

            if(efetueiConta == 0){

                valorConta = eval(conta.innerHTML)
                valorConta = valorConta.toLocaleString(lang, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 8
                });
                efetueiConta = 1
                efetueiOp = 0
                conta.innerHTML = valorConta

            } else{

                conta.innerHTML = 0
                efetueiConta = 0

            }

        } else if(conta.textContent == "0"){

            conta.innerHTML = botao.textContent

        } else{
            
            if(conta.innerText.toString().length <= 12){

                conta.append(botao.textContent)
                efetueiOp = 0
            }
            
        }
        
    }
})
