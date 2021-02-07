import React from "react";
import Header from "./Components/Header";
import UserCard from "./Components/UserCard";
import MyProducts from "./Pages/MyProducts";
import Register from "./Pages/LoginandRegister/Register";
import ImageUploader from "./Components/ImageUploader";
import { shallow } from "enzyme";

describe("HeaderComponent", () => {

    it("should render an icon", () => {
      const component = shallow(<Header />);
      expect(component.find(<i class="fa fa-user iconRed" aria-hidden="true"></i>)).toMatchSnapshot();
    });

    it("should render an a", () => {
      const component = shallow(<Header />);
      expect(component.find(<a class="fir-imageover" rel="noopener" target="_blank" href="/userProfile"/>)).toMatchSnapshot();
    });

    it("should render an icon", () => {
      const component = shallow(<UserCard />);
      expect(component.find(<i class="material-icons">&#10032;</i>)).toMatchSnapshot();
    });

    it("should render a p block", () => {
      const component = shallow(<UserCard />);
      expect(component.find(<p class="userCardReviews">no reviews for this product yet</p>)).toMatchSnapshot();
    });

    it('fetched default value ', () => {
      const component = shallow(<MyProducts />);
      expect(component.state().fetched).toEqual(false)
    })

    it('Url for image default value ', () => {
      const component = shallow(<ImageUploader />);
      expect(component.state().image).toEqual(null)
    })

    it('user default value ', () => {
      const component = shallow(<ImageUploader />);
      expect(component.state().user).toEqual(null)
    })

    it('email default value ', () => {
      const component = shallow(<Register />);
      expect(component.state().email).toEqual(null)
    })
});
