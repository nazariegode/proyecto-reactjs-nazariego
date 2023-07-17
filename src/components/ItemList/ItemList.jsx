import ItemCard from "../ItemCard/ItemCard"
import ItemCount from "../ItemCount/ItemCount"
import ItemDetail from "../ItemDetail/ItemDetail"
import Cart from "../Cart/Cart"


const ItemList = ({items}) => {

    return (
        <div>
            <h2>Nuestos Productos</h2>
            <hr />

            <div className='row'>
            {
                items.map((prod) => <ItemCard key={prod.id} items={prod}/> )
            }
            </div>
        </div>
    )
}
export default ItemList

 