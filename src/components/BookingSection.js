import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

function BookingSection({travelSearchList}) {
    const [buses, setBuses] = useState(travelSearchList)
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [modalInfo, setmodalInfo] = useState(false)
    const [show, setShow] = useState(false);
    const [routes, setRoutes] = useState([])

    const filteredRoutes = () => { 
        setRoutes(buses.filter(bus => bus.origin === origin && bus.destination === destination))
    }
    filteredRoutes()
    
    const handleSubmit = () => {
        if(routes.length > 0) {
            setmodalInfo(true)
            handleShow()
        }
    }

    // updating states
    const onOriginChange = (e) => {
        setOrigin(e.target.value)
    }
    const onDestinationChange = (e) => {
        setDestination(e.target.value)
    }

    useEffect(() => {
        filteredRoutes()
    }, [routes])

    // Modal toggle
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        {buses.map(bus => (
                            <option key={bus.id} value={bus.origin}>{bus.origin}</option>
                        ))}
                    </Form.Select>
                </Col>
                <Col>
                <Form.Label htmlFor="to">Destination</Form.Label>
                    <Form.Select 
                        onChange={onDestinationChange}
                        value={destination}
                        aria-label="Default select example">;
                        {buses.map(bus => (
                            <option key={bus.id} value={bus.destination}>{bus.destination}</option>
                        ))}
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
                <div className='p-0 text-center' style={{width: "23.6%", marginRight: "9px"}}>
                    <Button style={{width: "100%", paddingBlock: "10px", margin: '0'}} variant="primary" onClick={handleSubmit}>
                        Search
                    </Button>
                    {modalInfo && (<Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Woohoo, Bus {routes[0].id} is available</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h1>{`${routes[0].origin} - ${routes[0].destination}`}</h1>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>)}
                </div>
            </Row>
        </Form>
    </Container>
  )
}

export default BookingSection;