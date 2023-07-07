import { Row, Col, Button, Container } from "react-bootstrap"
import BookingSection from "../components/BookingSection"

function Home() {
    return (
        <>
            <header>
                <Container className="h-100 align-items-center d-flex">
                    <Row className="w-100 gap-3 m-0">
                        <h1 className="title hero-title">VIVA EXPRESS</h1>
                        <h2 className="subtitle hero-subtitle">Travel in Comfort and Style with Viva express
                        </h2>
                        <Button className="btn btn-colored rounded-0 fs-3 fw-semibold" style={{width: "310px"}} >Book a service</Button>
                    </Row>
                </Container>
            </header>
            <BookingSection />
        </>
    )
}

export default Home