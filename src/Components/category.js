import Card from 'react-bootstrap/Card';
import '../App.css'
import { Row, Col } from 'react-bootstrap';

function BasicExample() {
  return (
    <>
        <Row className="image-container">
      <Col xs={5} md={2}>
    <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w35-Grocery/Gadget-upgrade/Grocery-big-savings/Artboard_1_copy.jpg" />
  </Card>
    </Col>
   <Col xs={5} md={2}>
      <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w35-Grocery/Gadget-upgrade/Grocery-big-savings/Artboard_1_copy_4.jpg" />
      </Card>
      </Col>
     < Col xs={5} md={2}>
      <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w35-Grocery/Gadget-upgrade/Grocery-big-savings/Artboard_1_copy_5.jpg" />
      </Card>
      </Col> 
      <Col xs={5} md={2}>
        <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w35-Grocery/Gadget-upgrade/Grocery-big-savings/Artboard_1.jpg" /> 
      </Card>
      </Col>
      <Col xs={5} md={2}>
      <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src="https://ng.jumia.is/cms/0-1-category-pages/Grocery/Live-images/laundry_300x400v2.png" /> 
      </Card>
      </Col>
      <Col xs={5} md={2}>
     <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w35-Grocery/Gadget-upgrade/Grocery-big-savings/Artboard_1_copy_2.jpg" /> 
      </Card>
      </Col>
      <Col xs={5} md={2}>
     <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src="https://ng.jumia.is/cms/0-1-category-pages/health-beauty/300x400/skin-care.jpg" /> 
      </Card>
      </Col>
      <Col xs={5} md={2}>
      <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src="https://ng.jumia.is/cms/0-1-category-pages/fashion/300x400/300x400-fashion-deals.jpg" /> 
      </Card>
      </Col>
</Row>
      </>
  );
}

export default BasicExample;