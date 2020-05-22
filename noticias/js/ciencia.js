let containerDeNoticias = document.getElementById('listaDeNoticias')

async function pegarNoticiasCiencia(){

    let noticias = await fetch('http://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=3e3a478adba34777b3aeb7801068e15c')
    
    let listaDeNoticias = await noticias.json()

    listaDeNoticias.articles.forEach(noticia => {
           
        let divCol = document.createElement('div')
        divCol.setAttribute('class','col-3')
    
        let divCard = document.createElement('div')
        divCard.setAttribute('class','card')
    
        let imgCard = document.createElement('img')
        imgCard.setAttribute('class','card-img-top')
        imgCard.setAttribute('src', noticia.urlToImage)
    
        let divCardBody = document.createElement('div')
        divCardBody.setAttribute('class','card-body')
    
        let cardTitle = document.createElement('h5')
        cardTitle.setAttribute('class','card-title')
        cardTitle.textContent = noticia.title
    
        let cardText = document.createElement('p')
        cardText.setAttribute('class','card-text')
        cardText.textContent = noticia.description
    
        let link = document.createElement('a')
        link.setAttribute('class', 'btn btn-dark')
        link.setAttribute('href', noticia.url)
        link.textContent = 'Ver notícia'
    
        divCard.appendChild(imgCard)
        divCard.appendChild(divCardBody)

        divCardBody.appendChild(cardTitle)
        divCardBody.appendChild(cardText)
        divCardBody.appendChild(link)
    
        divCol.appendChild(divCard)

        containerDeNoticias.appendChild(divCol)

    });

}

pegarNoticiasCiencia()