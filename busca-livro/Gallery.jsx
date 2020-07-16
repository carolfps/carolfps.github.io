class Gallery extends React.Component{
    render(){
        let alternate = 'https://img.icons8.com/ultraviolet/220/000000/no-camera.png'
        return(
            <div>
                {
                    this.props.items.map( (item, index) =>{
                        let {title, imageLinks, infoLink} = item.volumeInfo
                        return(
                            <a 
                                key={index} 
                                className="book"
                                href={infoLink}
                                target="_blank"
                            >
                                <img 
                                    src={imageLinks !== undefined? imageLinks.thumbnail : alternate} 
                                    alt="book image"
                                    className="book-img"
                                />
                                <div className="book-text">
                                    <p>{title.length>30? title.substring(0,35).concat('...') : title}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}