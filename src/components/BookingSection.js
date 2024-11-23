import { Col, Container, Row, Button, Form, Modal, Table} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDefaultNormalizer } from '@testing-library/react';

function BookingSection({travelSearchList}) {
    const [buses, setBuses] = useState(travelSearchList)
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [show, setShow] = useState(false);
    const [routes, setRoutes] = useState([]);
    const [message, setmessage] = useState([])

    // updating states ( origin and destination)
    const onOriginChange = (e) => {
        setOrigin(e.target.value)
    }
    const onDestinationChange = (e) => {
        setDestination(e.target.value)
    }

    // handling when the models is suppose to display
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // refresh when routes match
    useEffect(() => {
        setRoutes(buses.filter(bus => bus.origin === origin && bus.destination === destination))
        console.log('useEffect ran')
    }, [origin, destination])

    // validating form submittion
    const handleSubmit = () => {
        if(routes.length > 0) {
            handleShow()
            setmessage([])
        }else if(origin == destination) {
            setmessage("Invalid Route. Choose a valid route")
        }else {
            setmessage("No bus for choosen Route") 
        }
    }

    // validating reservations
    const handleReserve = () => {
        alert("Seat successfully reserved!")
    }

    return (
    <Container className='bg-white rounded-4 px-5 py-4 shadow' style={{marginTop: "-76px"}}>
        <Form className='d-flex flex-column gap-5 py-4'>
            <div className='text-danger'>{message}</div>
            <Row className='d-flex'>
                <Col>
                    <Form.Label htmlFor="from">Origin</Form.Label>
                    <Form.Select 
                        onChange={onOriginChange}
                        value={origin}
                        id='from'>
                            <option>Enter origin</option>
                            <option value="Yaounde">Yaounde</option>
                            <option value="Douala">Douala</option>
                    </Form.Select>
                </Col>
                <Col>
                <Form.Label htmlFor="to">Destination</Form.Label>
                    <Form.Select 
                        onChange={onDestinationChange}
                        value={destination}
                        >
                            <option>Enter destination</option>
                            <option value="Yaounde">Yaounde</option>
                            <option value="Douala">Douala</option>
                    </Form.Select>
                </Col>
                <Col>
                <Form.Label htmlFor="type">Type</Form.Label>
                    <Form.Select name='type'>
                        <option>Select Class</option>
                        <option value="1">Economic</option>
                        <option value="2">First Class</option>
                        <option value="2">Classic</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label htmlFor="date">Date of Departure</Form.Label>
                    <Form.Control style={{paddingBlock: "7px", borderColor: "#989898"}} type="date" name='date'/>
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
                            name = "One"
                           />
                        <Form.Check
                            inline
                            type="radio"
                            id="radio"
                            label="Round Trip"
                            name = "One"
                        />
                    </Form.Group>
                </Col>
                <div className='p-0 text-center' style={{width: "23.6%", marginRight: "9px"}}>
                    <Button style={{width: "100%", paddingBlock: "10px", margin: '0'}} variant="primary" onClick={handleSubmit}>
                        Search
                    </Button>
                </div>
                <Modal className='modal-lg' show={show} onHide={handleClose}>
                    <Modal.Header closeButton>Available buses for your Search
                    </Modal.Header>
                    <Modal.Body className='px-5 py-4'>
                            {routes.map(route => (
                                  <Row key={route.id} className='border py-3'>
                                    <Col> 
                                        <div>{route.origin} - {route.destination}</div>
                                        <div>{route.departure_time}</div>
                                    </Col>
                                    <Col>
                                        <ul>
                                            <li>Bus Number: {route.id}</li>
                                            <li>{route.type}</li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <li>Price: {route.price}</li>
                                        <Button style={{width: "120px"}} variant="primary">
                                            Choose
                                        </Button>
                                    </Col>
                                  </Row>
                            ))
                            }
                    </Modal.Body>
                </Modal>
            </Row>
        </Form>
    </Container>
  )
}

export default BookingSection;
