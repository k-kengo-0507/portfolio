import React from 'react';
import './App.css';
import About from "./pages/about/about.component";
import MyNavbar from "./componnents/my-navbar/mynavbar.component";
import MyCarousal from "./componnents/my-carousal/my-carousal.component";
import TitleMessage from './componnents/title-message/title-message.component';

const App = () => {
  return (
  <div className="App" style={{ position: "relative" }}>
    <MyNavbar />
      <MyCarousal />
        <TitleMessage />
          <About />
    </div>
  );
}

export default App;
