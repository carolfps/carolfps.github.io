let tela = document.getElementById('principal')

const mudarbg = () => {

    var data = new Date()
    var hora = data.getHours()

    if(hora>=6 && hora<=13){
        tela.style.background = '#8EC5FC'
        tela.style.background = 'linear-gradient(62deg, #56ccf2 0%, #2f80ed 100%)'
    } else if(hora>13 && hora<18){
        tela.style.background = '#FBAB7E'
        tela.style.background = 'linear-gradient(62deg, #FF512F 0%, #F09819 100%)'
    } else{
        tela.style.background = '#23215e'
        tela.style.background = 'linear-gradient(62deg, #0f0c29, #302b63, #24243e)'
    }
}

mudarbg()
setInterval(mudarbg, 1000)