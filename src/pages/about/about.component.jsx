import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
// import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                {/* <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid /> */}
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Kengo Kamada</strong>
                <br />I am currently learning various programming languages to become a programmer.
                <br />
                I was born in Japan and started working after graduating from high school.
                I've been working in sales for a while now.
                In that job, I learned how to interact with people.
                <br />
                From now on, I would like to connect with many people through programming and move forward in my life.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  
                  
                  
                  
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;