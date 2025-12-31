import React from "react";

export const Btn = ({ pausar, togglePausar, reset }) => {

    return (
        <div className="row">
            <div className="d-flex mt-2 justify-content-evenly">
                <button type="button" className="btn btn-primary" id="restart" onClick={reset}>Reiniciar</button>
                <button type="button" className="btn btn-primary" id="stopPlay" onClick={togglePausar}>{pausar ? 'Reanudar' : 'Pausar'}</button>
            </div>
        </div>
    )
}