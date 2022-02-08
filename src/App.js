import './App.css';
import { FunctionCounter} from './components/FunctionCounter/FunctionCounter'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {NavBar} from './components/NavBar/NavBar'

function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer />
    <FunctionCounter />
    </>
  );
}

export default App;
