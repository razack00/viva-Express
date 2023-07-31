import { Row, Col, Container} from 'react-bootstrap'

function Footer() {
  return (
    <div className='bg-dark py-5'  data-bs-theme="dark">
        <Container className='text-white' data-bs-theme="dark">
            <Row>
                <Col className='text-left pt-4' sm={6} md={4} lg={3}>
                    <h2>Bus Travel</h2>
                    <ul className='p-0'>
                        <li>All Buses</li>
                        <li>All Bus routes</li>
                        <li>Discounts and Promotions</li>
                    </ul>
                </Col >
                <Col className='text-left pt-4' sm={6} md={4} lg={3}>
                    <h2>Quick Links</h2>
                    <ul className='p-0'>
                        <li>Services</li>
                        <li>Rent a Bus</li>
                        <li>Reservation</li>
                    </ul>
                </Col >
                <Col className='text-left pt-4' sm={6} md={4} lg={3}>
                    <h2>Experience Viva</h2>
                    <ul className='p-0'>
                        <li>About Us</li>
                        <li>Our Organisation</li>
                        <li>Media</li>
                        <li>Jobs and Careers</li>
                    </ul>
                </Col >
                <Col className='text-left pt-4' sm={6} md={4} lg={3}>
                    <h2>Customer Service</h2>
                    <ul className='p-0'>
                        <li>Help</li>
                        <li>Manage My Booking</li>
                        <li>Support</li>
                    </ul>
                </Col >
            </Row>
            <div className='text-center pt-5'>Copyright 2023 @Razack</div>
        </Container>
    </div>
  );
}

export default Footer;