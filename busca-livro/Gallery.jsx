class Gallery extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.items.map( (item, index) =>{
                        let {title} = item.volumeInfo
                        return(
                            <div key={index}>{title}</div>
                        )
                    })
                }
            </div>
        )
    }
}