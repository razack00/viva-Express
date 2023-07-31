import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function CarouselComp() {
  return (
    <Container className='py-5'>
      <Carousel className='bg-primary w-50 m-auto'>
        <Carousel.Item interval={3000} style={{minHeight: "300px"}}>
          <Carousel.Caption className='bg-dark position-static d-flex p-5 align-items-center'>
            <div className='d-flex p-5 flex-column gap-5 align-items-center justify-content-center' style={{height: "fit-content"}}>
              <img src='/images/bus1.jpeg' alt='Testimony' height="80px" width="80px" className='rounded-circle'></img>
              <div>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum. la vitae elit libero, a pharetra auguela vitae elit libero, a pharetra auguela vitae elit libero, a pharetra augue</p>
                <h3>Maria</h3>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000} style={{minHeight: "300px"}}>
          <Carousel.Caption className='bg-dark position-static d-flex p-5 align-items-center'>
            <div className='d-flex p-5 flex-column gap-5 align-items-center justify-content-center' style={{height: "fit-content"}}>
              <img src='/images/bus1.jpeg' alt='Testimony' height="80px" width="80px" className='rounded-circle'></img>
              <div>
                <h3>Second slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum. la vitae elit libero, a pharetra auguela vitae elit libero, a pharetra auguela vitae elit libero, a pharetra augue</p>
                <h3>Maria</h3>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000} style={{minHeight: "300px"}}>
          <Carousel.Caption className='bg-dark position-static d-flex p-5 align-items-center'>
            <div className='d-flex p-5 flex-column gap-5 align-items-center justify-content-center' style={{height: "fit-content"}}>
              <img src='/images/bus1.jpeg' alt='Testimony' height="80px" width="80px" className='rounded-circle'></img>
              <div>
                <h3>Third slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum. la vitae elit libero, a pharetra auguela vitae elit libero, a pharetra auguela vitae elit libero, a pharetra augue</p>
                <h3>Maria</h3>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
    
  );
}

export default CarouselComp;