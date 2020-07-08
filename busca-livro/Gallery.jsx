class Gallery extends React.Component{
    render(){
        let alternate = 'https://img.icons8.com/ios/220/000000/no-camera.png'
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
                                    {title}
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}