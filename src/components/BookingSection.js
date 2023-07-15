import { Col, Container, Row, Button, Form, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BookingSection({travelSearchList}) {
    const [buses, setBuses] = useState(travelSearchList)
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [show, setShow] = useState(false);
    const [routes, setRoutes] = useState([]);
    


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
    }, [show])

    const filteredRoutes = () => { 
        console.log(routes)
        handleShow()
    }
    
    const handleSubmit = () => {
        filteredRoutes()
    }



    // Modal toggle

    return (
    <Container className='bg-white rounded-4 px-5 py-4 shadow' style={{marginTop: "-76px"}}>
        <Form className='d-flex flex-column gap-5 py-4'>

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
                    <Modal  show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    {routes.map(route => (
                        <div key={route.id}>
                            <Modal.Title className='px-4'>Bus {routes.id} is available</Modal.Title>
                            <Modal.Body>
                                <h1>{`${route.origin} - ${route.destination}`}</h1>
                                <h3>{route.type}</h3>
                            </Modal.Body>
                            <Modal.Footer>
                            <Link to={"/reservation"} variant="secondary" onClick={handleClose}>
                                Reserve
                            </Link>
                            </Modal.Footer>
                        </div>
                       ))
                    }
                    </Modal>
                </div>
            </Row>
        </Form>
    </Container>
  )
}

export default BookingSection;