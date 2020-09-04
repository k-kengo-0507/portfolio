import React from 'react';
import './App.css';
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import MyNavbar from "./componnents/my-navbar/mynavbar.component";
import MyCarousal from "./componnents/my-carousal/my-carousal.component";
import TitleMessage from './componnents/title-message/title-message.component';
import Container from "react-bootstrap/Container";
import Slide from "react-reveal/Slide";

const App = () => {
  return (
  <div className="App" style={{ position: "relative" }}>
    <MyNavbar />
      <MyCarousal />
        <TitleMessage />
          <About />
          <div>
          <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
            <Skills />
            </Slide>
      </Container> 
      </div>
    </div>
  );
}

export default App;
