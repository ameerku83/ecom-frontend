import Carousel from 'react-bootstrap/Carousel';
import "./Baner.css"
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Baner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://img.freepik.com/free-vector/realistic-cyber-monday-twitter-header_23-2149816807.jpg?size=626&ext=jpg" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143835.jpg?size=626&ext=jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://img.freepik.com/free-vector/cyber-monday-twitter-header_23-2149719422.jpg?size=626&ext=jpg" alt="" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Baner;