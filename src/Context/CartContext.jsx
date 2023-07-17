import { useState, createContext } from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";


export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
            console.log(cart)

            const agregarAlCarrito = (item) => {
            setCart([...cart, item])
            }

            const eliminarDelCarrito = (id) => {
            setCart(cart.filter((prod) => prod.id !== id))
            }

            
            const isInCart = (Id) => {
                return cart,some((prod) => prod.id === id)
            }
            
            const totalCompra = () => {
                return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
            }
            
            const totalCantidad = () => {
                return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
            }

            const vaciarCarrito = () => {
                setCarrito([]) 
            }

    return (
        <CartContext.Provider value={(
            cart, 
            agregarAlCarrito,
            isInCart,
            totalCompra,
            eliminarDelCarrito,
            totalCantidad,
            vaciarCarrito
        )}>
            {children}
        </CartContext.Provider>
    )
}

