import './App.css';
import { ItemListContainer }  from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { NavBar } from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext'
import { Cart } from './components/Cart/Cart'
import { NotificationServicesProvider } from './services/notification/NotificationServices'



function App() {

  return (
    <>
    <NotificationServicesProvider>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </NotificationServicesProvider>
    </>
  );
}

export default App;