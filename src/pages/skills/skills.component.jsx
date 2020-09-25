import React from 'react';
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// skills
import { skills } from "./skills-data";

import "./skills.style.css";

const Skills = () => {
  return(
    <div className="pt-3 pb-3" id="skills">
    <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
    <p className="subTitle">(I’m learning how to program...)</p>
    <CardDeck>
      <Row className="d-flex justify-content-around">
        {/* Frontend */}
        <Col lg={4}>
          <Card className="focus mt-2 mb-2">
            <Card.Body>
              {/* Frontend */}
              <Card.Title className="text-center  card-title">Frontend</Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skills.frontend.map((skill, index) => (
                  <span className="p-2" key={index}>
                      <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> <span className="f-size">{skill.skillName}</span>
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Backend */}
        <Col lg={4}>
          <Card className="focus mt-2 mb-2">
            <Card.Body>
              <Card.Title className="text-center  card-title">Backend</Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skills.backend.map((skill, index) => (
                  <span className="p-2" key={index}>
                      <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> <span className="f-size">{skill.skillName}</span>
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Database */}
        <Col lg={4}>
          <Card className="focus mt-2 mb-2">
            <Card.Body>
              <Card.Title className="text-center  card-title">Database</Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skills.Database.map((skill, index) => (
                  <span className="p-2" key={index}>
                      <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> <span className="f-size">{skill.skillName}</span>
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>

         
          {/* Hosting platforms */}
          <Card className="focus mt-2 mb-2 ">
            <Card.Body>
              <Card.Title className="text-center  card-title">Hosting Platform</Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skills.hostingPlatform.map((skill, index) => (
                  <span className="p-2" key={index}>
                      <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> <span className="f-size">{skill.skillName}</span>
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </CardDeck>
  </div>
  );
};

export default Skills;