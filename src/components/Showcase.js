import { Col, Button, Row, Card, Container} from 'react-bootstrap';


function Showcase() {
  return (
    <Container className='mb-5'>
        <Row  className='d-flex align-items-center '>
            <Col md={5}>
                <Card.Img src={require("../assets/images/bus4.jpg")} />
            </Col>
            <Col md={7}>
                <Card.Body className='p-5'>
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