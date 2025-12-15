import React, { useState } from "react";

export const Btn = () => {

    const [stopPlay, setStopPlay] = useState(false)

    const stop = () => {

        setStopPlay(!stopPlay)
        
    }
     console.log(stopPlay);
     
    return (
        <div className="row">
            <div className="d-flex mt-2 justify-content-evenly">
                <button type="button" className="btn btn-primary" id="restart">Reiniciar</button>
                <button type="button" className="btn btn-primary" id="stopPlay" onClick={stop}>{stopPlay ? 'Reanudar' : 'Pausar'}</button>
            </div>
        </div>
    )
}