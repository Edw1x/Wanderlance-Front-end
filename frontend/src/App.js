import React from 'react';
import './Pages/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import userProfile from "./Pages/userProfile";
import Test from "./Pages/Test";
import GraphicsAndDesign from "./Pages/GraphicsAndDesign";
import DigitalMarketing from "./Pages/DigitalMarketing";
import Business from "./Pages/Business";
import MusicAndAudio from "./Pages/MusicAndAudio";
import ProgrammingAndTech from "./Pages/ProgrammingAndTech";
import VideoAndAnimation from "./Pages/VideoAndAnimation";
import WritingAndTranslation from "./Pages/WritingAndTranslation";
import background from "./Pages/background";
import sellers from "./Pages/Sellers";
import sellerspage from "./Pages/SellersPage";
import resetpassword from "./Pages/Resetpassword";
import resetpasswordConfirm from "./Pages/ResetpasswordConfirm";
import settings from "./Pages/Settings";

function App() 
{
  return (
    <div>
      <Header />

          <Switch>
            <Route exact path="/" component={background} />
            <Route exact path="/about" component={Home} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/sellers" component={sellers} />
            <Route exact path="/userProfile" component={userProfile} />
            <Route exact path="/categories/GraphicsandDesign" component={GraphicsAndDesign} />
            <Route exact path="/categories/DigitalMarketing" component={DigitalMarketing} />
            <Route exact path="/categories/Business" component={Business} />
            <Route exact path="/categories/MusicAndAudio" component={MusicAndAudio} />
            <Route exact path="/categories/ProgrammingAndTech" component={ProgrammingAndTech} />
            <Route exact path="/categories/VideoAndAnimation" component={VideoAndAnimation} />
            <Route exact path="/categories/WritingAndTranslation" component={WritingAndTranslation} />
            <Route exact path="/sellerspage" component={sellerspage} />
            <Route exact path="/resetpassword" component={resetpassword} />
            <Route exact path="/resetpasswordConfirm" component={resetpasswordConfirm} />
            <Route exact path="/userProfile/settings" component={settings} />
          </Switch>

    </div>
  );
}

export default App;
