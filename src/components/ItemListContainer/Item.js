import { Card, Button } from "react-bootstrap";

const Item = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} alt='imagen producto' />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Quedan {props.stock}</Card.Subtitle>
                <Card.Text>
                    {props.category}
                </Card.Text>
                <Button variant="secondary">Agregar</Button>
            </Card.Body>
        </Card>
    );
};

export default Item;