import { useContext } from 'react'
import { CartContext } from "../../Context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from 'react-router-dom'

const cart = () => {
    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito, totalCantidad} = useContext(CartContext)


    return (
        <div className="container my-5">
            {
                cart.length === 0 
                
                ? <>
                    <h2> Tu carrito está vacío</h2>
                    <br />
                    <Link className='btn btn-primary' to="/">Ir a la Tienda</Link>
                </>

                : <>
                <h2>Tu compra</h2>
                <hr />

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.producto}</h4>
                        <img src={prod.img} alt={prod.producto}/>
                        <p>Precio: ${prod.precio}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <button 
                        className="btn btn-danger"
                        onClick={() => eliminarDelCarrito(prod.id)}
                        >
                        <FaTrashAlt/>
                        </button>
                        <hr />
                    </div>
                ))
            }
            <div>
                <h5>Total: ${totalCompra()}</h5>
                <br />
                <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito</button>
            </div>  
            </>
            
            }

        </div>
              
            
    )
}

export default cart