import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Digitos } from "./Digitos";
import { Btn } from "./Btn";
//create your first component
export const Home = ({ contador }) => {

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
			<Btn />
		</div>
		</>
	);
};

