import Carousel from 'react-bootstrap/Carousel';
import first_image from '../images/first_slide_carousel.jpg'
import second_image from '../images/second_slide_carousel.jpg'
import third_image from '../images/third_slide_carousel.jpg'

function MainCarousel() {
  return (
    <Carousel fade style={{marginBottom: '10%', border: '3px solid #5b62f4'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{width: 800, height: 700}}
          src={first_image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Browse</h3>
          <h6>Search through the collection of items put up for action and find whatever you like</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{width: 800, height: 700}}
          src={second_image}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Bid</h3>
          <h6>Track new bids and bid against others to secure a product</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{width: 800, height: 700}}
          src={third_image}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Checkout</h3>
          <h6>Be the highest bidder and buy your won item afterwards</h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;