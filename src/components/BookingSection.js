import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

function BookingSection({travelSearchList}) {
    const buses = travelSearchList

    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")

    
    const route_is_valid = (buses, origin, destination) => {
        buses.forEach(bus => {
            if(bus.origin === origin && bus.destination === destination) {
                return true
            }
            console.log(`yo${bus.origin}`)
        });
        console.log(destination)
        return false
    }
    
    // updating states
    const onOriginChange = (e) => {
        setOrigin(e.target.value)
    }

    const onDestinationChange = (e) => {
        setDestination(e.target.value)
    }

    // handling submit
    const handleSubmit = () => {
        const is_valid = route_is_valid(buses, origin, destination)
        if(is_valid) {
            console.log("hello")
        }else {
            console.log("bad")
        }
    }

    // Modal toggle
    const [show, setShow] = useState(false);

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
                        aria-label="Default select example">
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

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Row>
        </Form>
    </Container>
  )
}

export default BookingSection;