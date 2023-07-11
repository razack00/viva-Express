import { Row, Container, Col } from "react-bootstrap"
import BlogCard from "../components/BlogCard"
import Showcase from "../components/Showcase"

function Home({data}) {
    const posts = data
    return (
        <>
        <Container>
            <h1 className="py-5 text-center">OUR BLOGS</h1>
            <Row className="py-5">
                {posts.map(post => (
                    <Col id={post.id} sm={6} md={4} lg={4}>
                        <BlogCard post = {post} />
                    </Col>
                ))}
            </Row>
        </Container>
        <Showcase />
        </>
    )
}

export default Home