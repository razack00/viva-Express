import { Col, Button, Row, Card, Container} from 'react-bootstrap';


function Showcase() {
  return (
    <Container className='bg-dark text-white p-5 mb-5'>
        <Row  className='d-flex align-items-center gap-5'>
            <Col className='py-5' md={5}>
                <Card.Img src={"/images/bus4.jpg"} />
            </Col>
            <Col md={6}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Col>
        </Row>
    </Container>
  );
}

export default Showcase;