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
                        <li>All Buses</li>
                        <li>All Buses</li>
                    </ul>
                </Col >
                <Col className='text-left pt-4' sm={6} md={4} lg={3}>
                    <h2>Bus Travel</h2>
                    <ul className='p-0'>
                        <li>All Buses</li>
                        <li>All Buses</li>
                        <li>All Buses</li>
                    </ul>
                </Col >
                <Col className='text-left pt-4' sm={6} md={4} lg={3}>
                    <h2>Bus Travel</h2>
                    <ul className='p-0'>
                        <li>All Buses</li>
                        <li>All Buses</li>
                        <li>All Buses</li>
                    </ul>
                </Col >
                <Col className='text-left pt-4' sm={6} md={4} lg={3}>
                    <h2>Bus Travel</h2>
                    <ul className='p-0'>
                        <li>All Buses</li>
                        <li>All Buses</li>
                        <li>All Buses</li>
                    </ul>
                </Col >
            </Row>
            <div className='text-center pt-5'>Copyright 2023</div>
        </Container>
    </div>
  );
}

export default Footer;