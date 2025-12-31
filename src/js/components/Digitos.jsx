export const Digitos = ({ digitos }) => {
    return (
        <>
            <div className="container text-center mt-2">
                <div className="row align-items-center">
                    <h1 className="d-flex justify-content-center">Contador Simple: <i className="fa-solid fa-stopwatch fa-bounce"></i></h1>
                    <div className="d-flex text-center justify-content-evenly">
                        <div className="col-1 p-2 m-1 bg-success-subtle text-success-emphasis rounded-3" id="col">{digitos.centenasMillar = digitos.centenasMillar <= 99999? 0: Math.floor(digitos.centenasMillar / 100000)}</div>
                        <div className="col-1 p-2 m-1 bg-success-subtle text-success-emphasis rounded-3" id="col">{digitos.decenasMillar = digitos.decenasMillar <= 9999? 0: Math.floor(digitos.decenasMillar / 10000)}</div>
                        <div className="col-1 p-2 m-1 bg-success-subtle text-success-emphasis rounded-3" id="col">{digitos.millar = digitos.millar <= 999? 0: Math.floor(digitos.millar / 1000)}</div>
                        <div className="col-1 p-2 m-1 bg-success-subtle text-success-emphasis rounded-3" id="col">{digitos.centenas = digitos.centenas <= 99 ? 0 : Math.floor(digitos.centenas / 100)}</div>
                        <div className="col-1 p-2 m-1 bg-success-subtle text-success-emphasis rounded-3" id="col">{digitos.decenas = digitos.decenas <= 9? 0: Math.floor(digitos.decenas / 10)}</div>
                        <div className="col-1 p-2 m-1 bg-success-subtle text-success-emphasis rounded-3" id="col">{digitos.unidades}</div>
                    </div>
                </div>
            </div>

        </>
    )
}