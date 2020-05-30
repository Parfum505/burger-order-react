import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NavItems } from "./NavItems";
import NavItem from "./NavItem/NavItem";
import LogoutIcon from "../../../assets/images/logout.svg";
import classes from "./NavItem/NavItem.css";

configure({ adapter: new Adapter() });

const wrapper = shallow(<NavItems />);
describe("NavItems", () => {
  it("should render 2 NavItem if not logged in", () => {
    expect(wrapper.find(NavItem)).toHaveLength(2);
  });
  it("should render 3 NavItem if logged in", () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find(NavItem)).toHaveLength(3);
  });
  it("should have logout btn", () => {
    wrapper.setProps({ isAuth: true });
    expect(
      wrapper.contains(
        <NavItem link="/logout">
          <img className={classes.LoginIcon} src={LogoutIcon} alt="icon" />
        </NavItem>
      )
    ).toEqual(true);
  });
});
