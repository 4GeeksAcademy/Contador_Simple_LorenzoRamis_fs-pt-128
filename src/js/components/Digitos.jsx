export const Digitos = ({ digitos }) => {

    if (digitos.decenas <= 9) {
        digitos.decenas = 0
    }

    if (digitos.decenas >= 10) {
        digitos.decenas = Math.floor(digitos.decenas / 10)
    }

    if (digitos.centenas <= 99) {
        digitos.centenas = 0
    }

    if (digitos.centenas >= 100) {
        digitos.centenas = Math.floor(digitos.centenas / 100)
    }

    if (digitos.millar <= 999) {
        digitos.millar = 0
    }

    if (digitos.millar >= 1000) {
        digitos.millar = Math.floor(digitos.millar / 1000)
    }

    if (digitos.decenasMillar <= 9999) {
        digitos.decenasMillar = 0
    }

    if (digitos.decenasMillar >= 10000) {
        digitos.decenasMillar = Math.floor(digitos.decenasMillar / 10000)
    }

    if (digitos.centenasMillar <= 99999) {
        digitos.centenasMillar = 0
    }

    if (digitos.centenasMillar >= 100000) {
        digitos.centenasMillar = Math.floor(digitos.centenasMillar / 100000)
    }

    return (
        <>
            <div className="container text-center mt-2">
                <div className="row align-items-center">
                    <h1 className="d-flex justify-content-center">Contador Simple: <i className="fa-solid fa-stopwatch fa-bounce"></i></h1>
                    <div className="d-flex text-center justify-content-evenly">
                        <div className="col-1 p-2 m-1 bg-success-subtle text-success-emphasis rounded-3" id="col">{digitos.centenasMillar}</div>
                        <div className="col-1 p-2 m-1 bg-success-subtle text-success-emphasis rounded-3" id="col">{digitos.decenasMillar}</div>
                        <div className="col-1 p-2 m-1 bg-success-subtle text-success-emphasis rounded-3" id="col">{digitos.millar}</div>
                        <div className="col-1 p-2 m-1 bg-success-subtle text-success-emphasis rounded-3" id="col">{digitos.centenas}</div>
                        <div className="col-1 p-2 m-1 bg-success-subtle text-success-emphasis rounded-3" id="col">{digitos.decenas}</div>
                        <div className="col-1 p-2 m-1 bg-success-subtle text-success-emphasis rounded-3" id="col">{digitos.unidades}</div>
                    </div>
                </div>
            </div>

        </>
    )
}