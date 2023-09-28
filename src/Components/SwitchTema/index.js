import React from "react";
import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import {Icono} from "../UI";

export default (tema)=>{
    const claro = <Icono src={themeOn} alt="temaclaro"></Icono>
    const oscuro = <Icono src={themeOff} alt ="temaOscuro"></Icono>
    return <>{tema ? oscuro : claro}</>;
}