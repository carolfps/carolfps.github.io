let containerDeNoticias = document.getElementById('listaDeNoticias')

async function pegarNoticias(){ 
    let noticias = await fetch('https://newsapi.caffsy.com/api/ProxyNewsApi?code=Tb5vwO2hATlmSFK5puLfqDjUclBbDIqxToxJ2AJ0cZlfyhzUpeqMGA==&country=br')
    
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

pegarNoticias()