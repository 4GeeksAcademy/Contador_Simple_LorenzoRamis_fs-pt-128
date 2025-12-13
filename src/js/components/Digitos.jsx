export const Digitos = ({ digitos }) => {

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <h1>Contador Simple: <i class="fa-solid fa-stopwatch fa-bounce"></i></h1>
                    <div className="d-flex">
                        <div className="col-1" id="col">{digitos.centenasMillar}</div>
                        <div className="col-1" id="col">{digitos.decenasMillar}</div>
                        <div className="col-1" id="col">{digitos.millar}</div>
                        <div className="col-1" id="col">{digitos.centenas}</div>
                        <div className="col-1" id="col">{digitos.decenas}</div>
                        <div className="col-1" id="col">{digitos.unidades}</div>
                    </div>
                </div>
            </div>
        </>
    )
}