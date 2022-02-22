import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom'
import './Item.css'

const Item = (product) => {
    return (
        <Card className='card' style={{ width: '18rem' }}>
            <Card.Img variant="top" className='imgCard' src={product.img} alt='imagen producto' />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Quedan {product.stock}</Card.Subtitle>
                <Card.Text>
                    {product.category}
                </Card.Text>
                <Link to={`/detail/${product.id}`}>Ver detalle</Link>
            </Card.Body>
        </Card>
    );
};

export default Item;