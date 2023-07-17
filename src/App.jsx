
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Nosotros from './components/Nosotros/Nosotros';
import Cart from './components/Cart/Cart';
import Contacto from './components/Contacto/Contacto';

function App() {
 
  return (
   <CartProvider>
        <BrowserRouter>

            <Header />

            <Routes>
              <Route path="/" element= {<ItemListContainer/>}/>
              <Route path="/productos/:categoryId" element= {<ItemListContainer/>}/>
              <Route path="/detail/:itemId" element= {<ItemDetailContainer/>}/>
              <Route path="/Nosotros" element= {<Nosotros/>}/>
              <Route path="/Cart" element= {<Cart/>}/>
              <Route path="/Contacto" element= {<Contacto/>}/>
              {/* <Route path= "*" element={<Navigate to={'/'}/>}/>
              <Route path= "*" element={ <Error404 />}/> */}
            </Routes>
              
        </BrowserRouter>

   </CartProvider>

        
    
  )
}

export default App
