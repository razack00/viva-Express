
import data from '../data'
import { Row, Col, Container, Card, Button } from 'react-bootstrap';

function BlogCard() {
  const image = data[0].img
  console.log(image)
  return (
    <Container>
      <Row>
        <Col>
          <Card>
          <Card.Img variant="top" src="../assets/images/bus1"/>
          <Card.Body>
            <Card.Title>{data[0].title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
          <Card.Img variant="top" src="../assets/images/bus1"/>
          <Card.Body>
            <Card.Title>{data[0].title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
          <Card.Img variant="top" src="../assets/images/bus1"/>
          <Card.Body>
            <Card.Title>{data[0].title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
        </Col>
      
      </Row>
    </Container>
    
  );
}

export default BlogCard;