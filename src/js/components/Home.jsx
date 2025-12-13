import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Digitos } from "./Digitos";
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
			<Digitos digitos={digitos} />
		</>
	);
};

