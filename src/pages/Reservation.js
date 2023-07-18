import {ListGroup, Row, Col, Form, Container, Button} from 'react-bootstrap/'

const Reservation = () => {
    return (
        <>
        <Container className='py-5'>
            <Form className='w-75 m-auto text-secondary'>
                <Row className='gap-3 bg-light p-3' >
                    <Col sm={5}>
                        <Row className='bg-white'>
                            <Col>
                                <ListGroup className='list-group-flush border-end'>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col>
                            <ListGroup className='list-group-flush'>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className='bg-white'>
                            <Col>
                            <ListGroup className='list-group-flush border-end'>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col>
                            <ListGroup className='list-group-flush'>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Cras justo odio</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='pt-5'>
                <Col>
                    <Form.Label htmlFor="from">First Name</Form.Label>
                    <Form.Control className='py-3' type="text" placeholder="First Name" />
                </Col>
                <Col>
                    <Form.Label htmlFor="to">Last Name</Form.Label>
                    <Form.Control className='py-3' type="text" placeholder="Last Name" />
                </Col>
                <Col>
                    <Form.Label htmlFor="disabledSelect">Date of Departure</Form.Label>
                    <Form.Control style={{paddingBlock: "9px", borderColor: "lightgrey", color: 'darkgray'}} type="date"/>
                </Col>
            </Row>
            <Row className='py-4'>
                <Col>
                    <Form.Label htmlFor="from">ID Number</Form.Label>
                    <Form.Control className='py-3' type="text" placeholder="ID Number" />
                </Col>
                <Col>
                    <Form.Label htmlFor="to">Phone</Form.Label>
                    <Form.Control className='py-3' type="tel" placeholder="phone" />
                </Col>
                <Col>
                    <Form.Label htmlFor="Email">Email</Form.Label>
                    <Form.Control className='py-3' type="text" placeholder="Email" />
                </Col>
            </Row>
            <div className='d-flex justify-content-end'>
                <Button className='m-50' style={{width: "10%", paddingBlock: "10px", }} variant="primary">
                    Submit
                </Button>
            </div>
        </Form>
      </Container>
      </>
    )
}

export default Reservation