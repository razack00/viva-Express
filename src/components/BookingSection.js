import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BookingSection() {
  return (
    <Container className='bg-white rounded-4 px-5 py-4 shadow' style={{marginTop: "-76px"}}>
        <Form className='d-flex flex-column gap-5 py-4'>

            <Row className='d-flex'>
                <Col>
                    <Form.Label htmlFor="from">From</Form.Label>
                    <Form.Select id='from' aria-label="Default select example">
                        <option>Origin</option>
                        <option value="1">Yaounde</option>
                        <option value="2">Douala</option>
                        <option value="3">Buea</option>
                        <option value="3">Bafousam</option>
                    </Form.Select>
                </Col>
                <Col>
                <Form.Label htmlFor="to">To</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Destination</option>
                        <option value="1">Yaounde</option>
                        <option value="2">Douala</option>
                        <option value="3">Buea</option>
                        <option value="3">Bafousam</option>
                    </Form.Select>
                </Col>
                <Col>
                <Form.Label htmlFor="disabledSelect">Type</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select Class</option>
                        <option value="1">Economic</option>
                        <option value="2">First Class</option>
                        <option value="2">Classic</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label htmlFor="disabledSelect">Date of Departure</Form.Label>
                    <Form.Control style={{paddingBlock: "7px", borderColor: "#989898"}} type="date"/>
                </Col>
            </Row>
            <Row className='d-flex justify-content-between'>
                <Col>
                    <Form.Group>
                        <Form.Check
                            inline
                            type="radio"
                            id="radio"
                            label="One Way"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            id="radio"
                            label="Round Trip"
                        />
                    </Form.Group>
                </Col>
                <Button className='btn-colored' style={{width: "23.6%", marginRight: "9px"}} type="submit">Submit</Button>
            </Row>
        </Form>
    </Container>
  )
}

export default BookingSection;