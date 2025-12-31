import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Digitos } from "./Digitos";
import { Btn } from "./Btn";
//create your first component
export const Home = () => {

	const [contador, setContador] = useState(0)
	const [pausar, setpausar] = useState(false)

	useEffect(() => {
		if (pausar) return
		const conteo = setInterval(() => {
			setContador(c => c + 1)
		}, 1000)
		return () => clearInterval(conteo)
	}, [pausar])

	const togglePausar = () => setpausar(p => !p)
	const reset = () => { setContador(0); setpausar(false) }

	const digitos = {
		unidades: contador % 10,
		decenas: contador % 100,
		centenas: contador % 1000,
		millar: contador % 10000,
		decenasMillar: contador % 100000,
		centenasMillar: contador % 1000000,
	}

	return (
		<>
			<div className="container">
				<Digitos digitos={digitos} />
				<Btn pausar={pausar} togglePausar={togglePausar} reset={reset} /></div>
		</>
	);
};