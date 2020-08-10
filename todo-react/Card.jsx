const Card = (props) => {
  return (
    <div class="col-lg-3 col-md-4 justify-content-center">
      <div className="card shadow m-2">
        <div className="card-body">
            <h3 className="font-weight-bold">{props.todo.titulo}</h3>
            <div className="d-flex justify-content-between align-items-center py-2">
              <p className="card-text my-0">{props.todo.descricao}</p>
              <span
                className="text-danger deletar"
                onClick={(e) => props.handler(props.todo)}
                title="Deletar tarefa"
              >
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true" className="MuiSvgIcon-root">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
                </svg>
              </span>
            </div>
        </div>
      </div>
    </div>
  );
};
