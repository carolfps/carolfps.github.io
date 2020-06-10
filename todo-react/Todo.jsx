class Todo extends React.Component{
    state = {
        todos: [ ]
    }
    generateKey(pre){
        return `${ pre }_${ new Date().getTime() }`;
    }
    handleSubmit(e){
        e.preventDefault()
        
        let titulo = e.target["titulo"].value
        let descricao = e.target["descricao"].value
        let id = this.generateKey(titulo)
        var todos = this.state.todos
        todos.push({titulo: titulo, descricao: descricao, id: id})

        this.setState({todos: todos})

        e.target["titulo"].value=""
        e.target["descricao"].value=""
    }
    handleClick(todo){
        let state = this.state
        let posicao = state.todos.indexOf(todo)
        state.todos.splice(posicao, 1)

        this.setState(state)
    }
    render() {
        return(
            <div className="main-page">
                <Navbar />
                <main>
                    <div className="d-flex flex-wrap justify-content-center">
                        {this.state.todos.map((todo) => 
                            <Card todo={todo} handler={(e) => this.handleClick(todo)} />
                        )}
                    </div>
                </main>
                <Footer handler={(e) => this.handleSubmit(e)} />
                
            </div>
        )
    }
}