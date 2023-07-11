
import { Card, Button } from 'react-bootstrap';

function BlogCard({post}) {
  return (
    <Card className='mt-5'>
      <Card.Img variant="top" src={post.img}  height="220"/>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
         {post.body.slice(0, 100)}... 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>    
  );
}

export default BlogCard;