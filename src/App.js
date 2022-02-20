import './App.css';
import { ItemListContainer }  from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { ItemCount } from './components/ItemCount/ItemCount'
import { NavBar } from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const agregarAlCarrito = (count) => {
      alert('Se han agregado: ' + count + ' al carrito')
  }

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


//<ItemCount stock={stock} initial={1} onAdd={agregarAlCarrito}/>
