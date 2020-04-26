import {Switch, Route} from "react-router-dom";
import React, { Component } from "react";

import Test from "./Pages/Test";
import Contacts from "./Pages/Contacts";
import userProfile from "./Pages/userProfile";
import Home from "./Pages/Home";
import sellers from "./Pages/Sellers";
import sellerspage from "./Pages/SellersPage";
import settings from "./Pages/Settings";
import myproducts from "./Pages/MyProducts";
import myorders from "./Pages/MyOrders"
import createproduct from "./Pages/createProduct";
import reportform from "./Pages/ReportForm";

//LoginandRegister
import Login from "./Pages/LoginandRegister/Login";
import Register from "./Pages/LoginandRegister/Register";
import resetpassword from "./Pages/LoginandRegister/Resetpassword";
import resetpasswordConfirm from "./Pages/LoginandRegister/ResetpasswordConfirm";

//Pages
import GraphicsAndDesign from "./Pages/CategoriePages/GraphicsAndDesign";
import DigitalMarketing from "./Pages/CategoriePages/DigitalMarketing";
import Business from "./Pages/CategoriePages/Business";
import MusicAndAudio from "./Pages/CategoriePages/MusicAndAudio";
import ProgrammingAndTech from "./Pages/CategoriePages/ProgrammingAndTech";
import VideoAndAnimation from "./Pages/CategoriePages/VideoAndAnimation";
import WritingAndTranslation from "./Pages/CategoriePages/WritingAndTranslation";

export default class routs extends Component {
    render() {
        return (
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
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
            <Route exact path="/userProfile/myProducts" component={myproducts} />
            <Route exact path="/userProfile/myProducts/createProduct" component={createproduct} />
            <Route exact path="/userProfile/myOrders" component={myorders} />
            <Route exact path="/reportForm" component={reportform} />
          </Switch>
        );
    }
}