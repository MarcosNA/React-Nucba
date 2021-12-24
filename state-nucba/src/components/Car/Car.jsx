import {useEffect, useContext } from "react"
import NucbaContext from "../../context/NucbaContext"

const Car = () => { 

    const {stateCar, setStateCar, contar, setContar} = useContext(NucbaContext)
    
    useEffect ( () =>{
        console.log("Total: "+contar)
    }, [contar] )

    const encenderApagar = () =>{
        setStateCar(!stateCar)
        setContar(contar + 1)
    }


    return (
        <div>
            <span>El coche esta: {stateCar? "Encendido" : "Apagado"}</span>
            <button onClick={encenderApagar}>Encender / Apagar</button><br/>
            <span> Clicks: {contar} </span>
            
        </div>
    )

}

export default Car