import alimentacion from "./assets/images/alimentacion.svg"
import utilidades from "./assets/images/utilidades.svg"
import salud from "./assets/images/salud.svg"
import transporte from "./assets/images/transporte.svg"
import otros from "./assets/images/otros.svg"
import { Icono } from "./Components/UI"
import React from "react";
export default (type)=>{
    // console.log(type)
    const Images = {
        default: <Icono src={otros} alt="otros"></Icono> ,
        Restaurante: <Icono src={alimentacion} alt="alimentacion"></Icono> ,
        Utilidades:<Icono src={utilidades} alt="utilidades"></Icono>,
        Otros : <Icono src={otros} alt="otros"></Icono>,
        Salud: <Icono src={salud} alt="salud"></Icono>,
        Transporte: <Icono src={transporte} alt ="transporte" ></Icono>,


    };
    return Images[type] || Images ["default"]; 
};