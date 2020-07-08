class Global extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: []
        }
    }
    search() {
        const base_url = 'https://www.googleapis.com/books/v1/volumes?q='
        fetch(`${base_url}${this.state.query}`, {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            let {items} = json
            this.setState({items})
        })
    }
    render() {
        return(
            <div className="global">
                <h2>Busca Livro</h2>
                <div className="form-group">                    
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Busque um livro" 
                            onChange={event => this.setState({query: event.target.value})}
                            onKeyUp={event => {
                                if(event.key == 'Enter'){
                                    this.search();
                                }
                            }}
                        />
                        <div className="input-group-append" onClick={() => this.search()}>
                            <span className="material-icons input-group-text search-btn">search</span>
                        </div>
                    </div>
                </div>
                <Gallery items={this.state.items} />
            </div>
        )
    }
}