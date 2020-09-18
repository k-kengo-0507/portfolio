import React from 'react';
import './App.css';
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import MyNavbar from "./componnents/my-navbar/mynavbar.component";
import MyCarousal from "./componnents/my-carousal/my-carousal.component";
import TitleMessage from './componnents/title-message/title-message.component';
import Container from "react-bootstrap/Container";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Projects from "./componnents/projects/project.component";
import ContactForm from "./pages/contact-form/contact-form.component";
import FooterPanel from "./componnents/footer/footer.component"

const App = () => {
  return (
  <div className="App" style={{ position: "relative" }}>
    <MyNavbar />
      <MyCarousal />
        <TitleMessage />
          <About />
          <div>
            <Container className="container-box rounded">
              <Slide bottom duration={1500}>
                <hr />
                  <Skills />
                   </Slide>
            </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={1500}>
            <hr />
            <Experience />
              </Fade>
        </Container>
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={1500}>
            <hr />
            <Projects />
          </Slide>
        </Container>
        <Container className="container-box rounded">
          <Fade duration={1500}>
            <hr />
            <ContactForm />
          </Fade>
        </Container>
          <hr />  
           <FooterPanel />
         </div>
        </div> 
      </div>
    </div>
  );
};

export default App;
