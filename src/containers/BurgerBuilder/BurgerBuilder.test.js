import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BurgerBuilder } from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Spinner from "../../components/UI/Spinner/Spinner";

configure({ adapter: new Adapter() });

const wrapper = shallow(<BurgerBuilder error={true} />);
const errorStyle = {
  textAlign: "center",
  marginTop: 90,
  color: "red",
  fontWeight: "bold",
};

describe("BurgerBuilder", () => {
  it("should render Spinner", () => {
    wrapper.setProps({ ingredients: null, error: false });
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
  it("shoud render <p>with error info if error", () => {
    wrapper.setProps({ ingredients: null, error: true });
    expect(
      wrapper.contains(
        <p style={errorStyle}>Ingredients can&apos;t be loaded.</p>
      )
    ).toEqual(true);
  });
  it("shoud render BuildControls when receiving ingredients", () => {
    wrapper.setProps({ ingredients: { salad: 1 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
