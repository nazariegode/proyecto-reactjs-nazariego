import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"

const ItemDetail = (id, producto, descripcion, precio, img, category, stock) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()
 
    const handleAgregar = () => {
        const item = {
            id,
            producto,
            precio,
            category,
            descripcion,
            img,
            stock,
            cantidad
        }

        agregarAlCarrito(item)
        
        }
    

        const handleVolver = () => {
            navigate(-1)
        }

    return (
        <div className="container my-5">
            <h2>{producto}</h2>

            <img src={img} alt={producto} />
            <p>{descripcion}</p>

            <h4>Precio: ${precio}</h4>
            <br />
            <small>Categoría: {category}</small>
            <br />
            <ItemCount 
                max={stock}
            />

            {
            isInCart(id)
            ? <Link className = "btn btn-success" to="/Cart">Terminar mi pedido</Link>
            : <ItemCount
                max={stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
            />
            }
            <hr />
            <button onClick={handleVolver} className="btn btn-primay">Volver</button>

        </div>
    )
    }

export default ItemDetail