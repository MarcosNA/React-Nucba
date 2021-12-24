import { useContext } from "react"
import NucbaContext from "../../context/NucbaContext"
import Button from "../Button/Button"
import Counter from "../../features/counter/Counter"
import "./styles.css"


const Content = () => {

    const {showUser, setShowUser} = useContext(NucbaContext)
   
    return(
        
            <section>
                <span>Este es el componente del contenido de la aplicacio <br /> click al boton para ver la accion</span>

                <Counter />

                {/* <Button text="Click aqui" fn={ () => {setShowUser(prevState => !prevState)}}/> */}
                
                <div className="divShow">
                    {showUser? <span>Hola, como estas?</span> : false }
                </div>

            </section>
      
    )
}

export default Content