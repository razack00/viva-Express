import { Row, Col, Container } from 'react-bootstrap/';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <>
      <Row className='bg-white m-0'> 
        <Col className="d-flex justify-content-end gap-4 align-items-center py-2 px-5">
            <i to="#">someone@gmail.com</i>
            <i to="#">+237 6 53 88 59 53</i>
            <i>Yaounde</i>
            <select name="language" id="language">
                <option value="English">English</option>
                <option value="French">French</option>
            </select>
        </Col>
      </Row>
      <Navbar expand="lg" className="bg-transparent">
        <Container fluid className='d-flex container'>
          <Navbar.Brand href="#home">
              <span className="hero-moto flex fs-3 text-white"><p>The <b>Ultimate</b> Driving Machine</p></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav border-white bg-white" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 justify-content-end">
              <Nav.Link className='nav-item' href="#home">HOME</Nav.Link>
              <NavDropdown title="ABOUT COMPANY" id="dropdown-autoclose-true" renderMenuOnMount={true}>
                <NavDropdown.Item href="#action/3.1">OUR ORGANISATION</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  HISTORY AND PRESENTATION
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">OUR NETWORK</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  OUR VALUES
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  OUR PARTNERS
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  JOBS AND CAREERS
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="SERVICES" id="basic-nav-dropdown" renderMenuOnMount={true}>
                <NavDropdown.Item href="#action/3.1">BUSINESS CLASS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  FIRST CLASS
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">CLASSIC</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  COURIER SERVICE
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="PLAN YOUR JOURNEY" id="basic-nav-dropdown" renderMenuOnMount={true}>
                <NavDropdown.Item href="#action/3.1">SCHEDULES & RATES</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  ROUTES
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">BOOK A RESERVATION</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  TICKET INFORMATION
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="MEDIA" id="basic-nav-dropdown" renderMenuOnMount={true}>
                <NavDropdown.Item href="#action/3.1">BLOG</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  GALLERY
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="CONTACT" id="basic-nav-dropdown" renderMenuOnMount={true}>
                <NavDropdown.Item href="#action/3.1">CUSTOMER SUPPORT</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  BOOKING
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;