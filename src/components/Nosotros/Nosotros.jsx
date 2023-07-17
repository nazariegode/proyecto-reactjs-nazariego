import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const Nosotros = () => {
    const contexto = useContext(CartContext)
    console.log(contexto)
    
    return (
            <div>
                <h2>Nosotros</h2>
                <hr />
                <p>Nosotros somos especialistas en sushi, ¡el mejor de la ciudad!</p>
            </div>
    )
}

export default Nosotros 