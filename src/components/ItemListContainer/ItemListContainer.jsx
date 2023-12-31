
import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)
    
    const { categoryId } = useParams()
    console.log(categoryId)
    
    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        
        getDocs(productosRef)
            .then((resp) => {
                const items = resp.docs.map((doc) => doc.data() )
                setProductos(items)
            })
            .catch(e => console.log(e))
            .finally (() => setLoading(false))

    }, [categoryId])


    return (
        <div className="container my-5">
            { 
                loading
                ? <h2>Cargando...</h2>
                :<ItemList items={productos}/> 
            }
        </div>
    )
}

export default ItemListContainer