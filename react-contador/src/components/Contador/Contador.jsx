import React, {useState} from "react";
import Button from "../Button/Button";
import Numero from "../Numero/Numero";

//Conceptos principales de react
//Componentes, Propiedades, JSX, Estado
//Hooks: useState, useEffect, useRef, useMemo, useCallback, useReducer




const Contador = () =>{

    //Estructura principal de useState
    //const [state, setState] = userState[estadoInicial]

    const [contador, setContador] = useState (0)
    const [error, setError] = useState (" ")

    const restarNumero =()=>{
        if(contador === 0){
            setError("El numero no puede ser menor a 0")
        }
        else{
            setContador(contador - 1)
        }
        
    }

    const sumarNumero =()=>{
        setContador (contador + 1)
        setError(" ")
    }

    return(
        <div>
            <Button onclick={restarNumero} titulo= "Restar" />
            <Numero numero = {contador} />
            <Button onclick={sumarNumero} titulo = "Sumar" />
            <p> {error} </p>
        </div>
    )
}

export default Contador;