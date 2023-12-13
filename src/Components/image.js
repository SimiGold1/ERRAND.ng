import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://shoprite.ng/wp-content/uploads/2023/08/web-banner-1-01-1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/sparfoodBanner.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.myportfolio.com/9c36b408-844a-4291-b685-30536228d6b5/de58b161-1c01-4050-9546-218ef5147a37_rw_1920.png?h=7daf1ad4b85a67a8e4beec48265e46fc"  
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;