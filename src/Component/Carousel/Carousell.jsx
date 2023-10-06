import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const Carousell = () => {

    const images = [
        "https://i.ibb.co/5TZLq4x/toa-heftiba-TVQFl9-R-MLQ-unsplash.jpg",
        "https://i.ibb.co/bPfzyXP/shardayyy-photography-f-Jzm-Pe-a0e-U-unsplash.jpg",
        "https://i.ibb.co/x1vSR2p/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg",
        "https://i.ibb.co/cbF3w6Q/mitchell-lawler-tbaory-Uol-E-unsplash.jpg",
        "https://i.ibb.co/bBJwWJw/md-duran-r-E9vg-D-TXg-M-unsplash.jpg"
        // Add more image URLs here
      ];
    return (
 
        <Carousel data-bs-theme="dark">

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/cbF3w6Q/mitchell-lawler-tbaory-Uol-E-unsplash.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/bBJwWJw/md-duran-r-E9vg-D-TXg-M-unsplash.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    );
    }
export default Carousell;