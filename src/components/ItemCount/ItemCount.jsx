import { useState } from "react"
import { CartContext } from "../../Context/CartContext"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemCount = ({max}) => {
    const [cantidad, setCantidad]= useState(1)  

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    } 
    
    const handleAgregar = () => {

    }

    return (
        <div>
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-3">{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
            <br />
            <button onClick={handleAgregar} className="btn btn-primary">Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount