export const Btn = ({ btn }) => {



    return (
        <div className="row">
            <div className="d-flex mt-2 justify-content-evenly">
                <button type="button" className="btn btn-primary" id="">Cuenta regresiva</button>
                <button type="button" className="btn btn-primary" id="stop">Pausar</button>
                <button type="button" className="btn btn-primary" id="play">Reanudar</button>
            </div>
        </div>
    )
}