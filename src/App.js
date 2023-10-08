import React from "react";
import Landing from "./components/Landing/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Simulate from "./components/ScrollableMain.js/Simulate";
import Kaggle from "./components/ScrollableMain.js/Kaggle";
import MainSection from "./components/ScrollableMain.js/MainSection";
import galaxy from "./assets/galaxy.jpg";
import { sampleProjects, sampleNotifications } from './components/ScrollableMain.js/Data';
import NotificationComponent from "./components/ScrollableMain.js/NotificationComponent";
import Game from "./components/ScrollableMain.js/Game";

const App = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${galaxy})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={backgroundImageStyle}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route path="/main" element={<MainSection projects={sampleProjects} />} />
            <Route path="/simulate" element={<Simulate />} />
            <Route path="/kaggle" element={<Kaggle />} />
            <Route path="/notification" element={<NotificationComponent notifications={sampleNotifications}  />} />
            <Route path="/games" element={<Game />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
