import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart} from 'react-icons/fa'
import { CartContext } from '../../Context/CartContext'

const CardWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
            <Link to="/Cart" className='fs-5' style={{color: 'red'}}>
               <FaShoppingCart/>
               <span>{totalCantidad}</span>
            </Link>
    )
}

export default CardWidget 