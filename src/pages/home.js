import { Row, Button, Container, Carousel } from "react-bootstrap"
import BookingSection from "../components/BookingSection"
import TextCard from "../components/TextCard"
import BlogCard from "../components/BlogCard"
import Showcase from "../components/Showcase"
import CarouselComp from "../components/CarouselComp"
import Footer from "../components/Footer"

function Home() {
    return (
        <>
            <header>
                <Container className="h-100 align-items-center d-flex">
                    <Row className="w-100 gap-3 m-0">
                        <h1 className="title hero-title">VIVA EXPRESS</h1>
                        <h2 className="subtitle hero-subtitle">Travel in Comfort and Style with Viva express
                        </h2>
                        <Button className="btn btn-colored rounded-2 fs-3 fw-semibold" style={{width: "280px"}} >Book a service</Button>
                    </Row>
                </Container>
            </header>
            <BookingSection />
            <TextCard />
            <Showcase />
            <BlogCard />
            <CarouselComp />
            <Footer />
        </>
    )
}

export default Home