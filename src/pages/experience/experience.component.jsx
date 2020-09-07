import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

import "./experience.style.css";


const Experience = () => {
  return(
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
    <Container>
      <Card className="text-center">
  {/* <Card.Header>Featured</Card.Header> */}
  <Card.Body>
    <Card.Text>
      2010年　　埼玉県立深谷第一高等学校　　卒業
    </Card.Text>
  </Card.Body>
  
  <Card.Body className = "body-one">
    <Card.Text>
    2010年　　通信販売二次代理店　　入社　営業部配属（3年半経験）
    </Card.Text>
  </Card.Body>

  <Card.Body>
    <Card.Text>
      2013年　　通信販売一次代理店　　入社　営業部配属（5年半経験）　　
    </Card.Text>
  </Card.Body>

  <Card.Body className = "body-one">
    <Card.Text>
    　　2019年　宿泊事業会社　　入社　オペレーション事業部配属(3ヶ月経験)
    </Card.Text>
  </Card.Body>

  <Card.Body>
    <Card.Text>
      2020年　　SES事業会社　　入社　ITサポート職配属（現在に至る）
    </Card.Text>
  </Card.Body>
  {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
</Card>
  
</Container>
</div>
  
  );
};

export default Experience;