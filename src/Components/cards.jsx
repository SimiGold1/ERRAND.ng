import React from "react";
import '../App.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img className="brands" variant="top" src="https://decisionmakers.com.ng/wp-content/uploads/2020/08/logo-shoprite-1.jpg" />
      </Card>
      <Card>
        <Card.Img variant="top" src="https://sparnigeria.com/wp-content/uploads/2023/11/spar_logo.svg"  />
      </Card>
      <Card>
        <Card.Img variant="top" src="https://justriteonline.com/wp-content/uploads/2020/08/newlogo2-1.png" />
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media.licdn.com/dms/image/D4D0BAQEpWympcxUzTQ/company-logo_200_200/0/1666666797746?e=2147483647&v=beta&t=gbu1gcRTvAfRZeCYD4nsTWF3E_vvUIeaq2Z8RDMHXbE" />
      </Card>
    </CardGroup>
  );
}

export default GroupExample;