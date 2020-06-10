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
        let key = this.generateKey(titulo)
        var todos = this.state.todos
        todos.push({titulo: titulo, descricao: descricao, key: key})
        
        this.setState({todos: todos})

        localStorage.setItem('@todo-app/todos', JSON.stringify(todos)) 

        e.target["titulo"].value=""
        e.target["descricao"].value=""
    }
    handleDelete(todo){
        let state = this.state
        let posicao = state.todos.indexOf(todo)
        state.todos.splice(posicao, 1)

        this.setState(state)

        localStorage.setItem('@todo-app/todos', JSON.stringify(state.todos)) 
    }
    componentDidMount(){
        const previousTodos = localStorage.getItem('@todo-app/todos');
        if (previousTodos){
            this.setState({ todos: JSON.parse(previousTodos) });
        }
    }
    render() {
        return(
            <div className="main-page">
                <Navbar />
                <main>
                    <div className="d-flex flex-wrap justify-content-center">
                        {this.state.todos.map((todo) => 
                            <Card key={todo.key} todo={todo} handler={(e) => this.handleDelete(todo)} />
                        )}
                    </div>
                </main>
                <Footer handler={(e) => this.handleSubmit(e)} />
                
            </div>
        )
    }
}