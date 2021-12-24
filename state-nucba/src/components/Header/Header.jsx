import {useContext} from "react"
import NucbaContext from "../../context/NucbaContext"
import {HeaderWraper} from "../Header/styles"


const Header = () =>{

    const {showUser} = useContext(NucbaContext)
    
    return(
        
           <HeaderWraper changueBackground = {showUser} >
                 <span>REACT GLOBAL STATE</span><br/>
                 {showUser? <span>El mensaje esta activado</span> : ""}
            </HeaderWraper>
        
    )     
       
        
}

export default Header