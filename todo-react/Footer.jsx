const Footer = (props) => {

    return(
        <footer>
            <form onSubmit={(e) => props.handler(e)} className="d-flex justify-content-center py-2 container">   
                <input placeholder="Título" className="form-control col-md-5 mx-2" name="titulo" />    
                <input placeholder="Descrição" className="form-control col-md-5 mx-2" name="descricao" />
                <button className="btn-adicionar">Enviar</button>
            </form>
        </footer>
    )
    
}