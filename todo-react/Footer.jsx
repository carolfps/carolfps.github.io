const Footer = (props) => {

    return(
        <footer>
            <form onSubmit={(e) => props.handler(e)} className="d-flex flex-wrap justify-content-center py-2 container">   
                <input placeholder="Título" className="form-control col-md-4 mx-2 my-1" name="titulo" />    
                <input placeholder="Descrição" className="form-control col-md-4 mx-2 my-1" name="descricao" />
                <button className="btn-adicionar col-lg-1 col-md-2 mx-2 my-1 py-1">Enviar</button>
            </form>
        </footer>
    )
    
}