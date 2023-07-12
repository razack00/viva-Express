import { Row, Container, Col } from "react-bootstrap"
import BlogCard from "../components/BlogCard"
import Showcase from "../components/Showcase"
import data from "../data"
import { useParams } from "react-router-dom"

function Details() {
    const {id} = useParams()
    const post = data.find((d) => d.id)
    return (
        <>
        <Container>
            <h1 className="py-5 text-center">blog</h1>
            <h2 className="pb-5 fs-1">{post.title}</h2>
            <p className="pb-5">{post.body}</p>
        </Container>
        </>
    )
}

export default Details