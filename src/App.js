import './App.css';
import { ItemListContainer }  from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { ItemCount } from './components/ItemCount/ItemCount'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  let stock = 15;

  const agregarAlCarrito = (count) => {
      alert('Se han agregado: ' + count + ' al carrito')
  }

  return (
    <>
    <NavBar />
    <ItemListContainer />
    <ItemCount stock={stock} initial={1} onAdd={agregarAlCarrito}/>
    <ItemDetailContainer />
    </>
  );
}

export default App;
