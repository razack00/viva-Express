import { Col, Container, Row, Button, Form, Modal, ListGroup, Badge } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BookingSection({travelSearchList}) {
    const [buses, setBuses] = useState(travelSearchList)
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [show, setShow] = useState(false);
    const [routes, setRoutes] = useState([]);
    const [message, setmessage] = useState([])

    const [date] = useState(new Date().toLocaleDateString())
    
    // updating states
    const onOriginChange = (e) => {
        setOrigin(e.target.value)
    }
    const onDestinationChange = (e) => {
        setDestination(e.target.value)
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setRoutes(buses.filter(bus => bus.origin === origin && bus.destination === destination))
        console.log('useEffect ran')
    }, [origin, destination])

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

    const handleReserve = () => {
        alert("Seat successfully reserved!")
    }
    console.log(routes)
    console.log(message)

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
                        id='from' 
                        aria-label="Default select example">
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
                        aria-label="Default select example">
                            <option>Enter destination</option>
                            <option value="Yaounde">Yaounde</option>
                            <option value="Douala">Douala</option>
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
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body className='px-5 py-4'>
                            {routes.map(route => (
                                <Row key={route.id}>
                                        <Modal.Title as="h1" className='w-100 text-success'>Bus {route.id} is available</Modal.Title>
                                    <Col>
                                        <ListGroup>
                                            <ListGroup.Item
                                                as="li"
                                                className="d-flex justify-content-between align-items-start"
                                            >
                                                <div className="text-secondary">
                                                <div className="text-primary"> Departure Date</div>
                                                <div>{date}</div>
                                                <div>{route.departure_time}</div>
                                                </div>
                                                <div className=" text-secondary">
                                                <div className="text-primary"> Arrival Date</div>
                                                <div>sdfsdfsfsfsfsd</div>
                                                <div>{route.arrival_time}</div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item
                                                as="li"
                                                className="d-flex justify-content-between align-items-start"
                                            >
                                                <div className="text-secondary">
                                                <div className="text-primary"> Origin</div>
                                                <div>{route.origin}</div>
                                                </div>
                                                <div className="text-secondary">
                                                <div className="text-primary"> Destination</div>
                                                <div>{route.destination}</div>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col>
                                        <ListGroup as="ol">
                                            <ListGroup.Item
                                                as="li"
                                                className="d-flex justify-content-between align-items-start"
                                            >
                                                <div className="text-primary">Bus N°</div>
                                                <div bg="primary" className='text-secondary'>
                                                P0003
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item
                                                as="li"
                                                className="d-flex justify-content-between align-items-start"
                                            >
                                                <div className="text-primary">Type</div>
                                                <div bg="primary" className='text-secondary'>
                                                {route.type}
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item
                                                as="li"
                                                className="d-flex justify-content-between align-items-start"
                                            >
                                                <div className="text-primary">Price</div>
                                                <div bg="primary" className='text-secondary'>
                                                5000 FCFA
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            ))
                            }

                        <Row className='pt-5'>
                            <Col>
                                <Form.Label htmlFor="from">First Name</Form.Label>
                                <Form.Control className='py-3 fs-5' name='from' type="text" placeholder="First Name" required />
                            </Col>
                            <Col>
                                <Form.Label htmlFor="to">Last Name</Form.Label>
                                <Form.Control className='py-3 fs-5' type="text" placeholder="Last Name" name='to' required />
                            </Col>
                            <Col>
                                <Form.Label htmlFor="date">Date of birth</Form.Label>
                                <Form.Control className='fs-5' style={{paddingBlock: "9px", borderColor: "lightgrey", color: 'darkgray'}} type="date" name='date' required/>
                            </Col>
                        </Row>
                        <Row className='py-4'>
                            <Col>
                                <Form.Label htmlFor="id">ID Number</Form.Label>
                                <Form.Control className='py-3 fs-5' type="text" placeholder="ID Number" name='id' required />
                            </Col>
                            <Col>
                                <Form.Label htmlFor="phone">Phone</Form.Label>
                                <Form.Control className='py-3 fs-5' type="tel" placeholder="phone" name='phone' required />
                            </Col>
                            <Col>
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control className='py-3 fs-5' type="email" name='email' placeholder="email" />
                            </Col>
                        </Row>
                        <div className='d-flex justify-content-end'>
                            <Button className='m-50' style={{width: "10%", paddingBlock: "10px", }} variant="primary" onClick={handleReserve}>
                                Reserve Now
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal>
            </Row>
        </Form>
    </Container>
  )
}

export default BookingSection;