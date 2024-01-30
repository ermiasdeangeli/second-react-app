import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Books from "../fantasy.json";

function CardBook() {
    return (
        <Card style={{ width: '18rem' }}>
          <img src={Books.img} alt="Book pic" />
          <Card.Body>
            <Card.Title>{Books.title}</Card.Title>
            <Card.Text>
              {Books.price}
            </Card.Text>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      );
}

export default CardBook;

