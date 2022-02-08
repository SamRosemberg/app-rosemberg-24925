import { useState } from 'react'
import './ItemCount.css'

export const ItemCount = (props) => {
    const [count, setCount] = useState(0)

    let stock = 15;

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const agregarAlCarrito = () => {
        alert('Se han agregado: ' + count + ' al carrito')
    }

    return (
        <div className="text-center ">
            <h3>Function Counter</h3>
            <h3>{count}</h3>
            <div className="col">
                <button className="btn btn-light mx-3" disabled={count <= 0 ? true : false} onClick={decrement}>-</button>
                <button className="btn btn-light mx-3" disabled={stock == 0 ? true : false} onClick={increment}>+</button>
            </div>
            <button className="btn btn-lg btn-light my-3" onClick={agregarAlCarrito}  disabled={count <= 0 ? true : false}>Agregar al carrito</button>
        </div>
    )
}


