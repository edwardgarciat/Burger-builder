import React from "react";
import { configure, shallow, ReactWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { burgerBuilder } from "./BurgerBuilder";
import BuilControls from "../../components/Burger/BuildControls/BuildControl";
import instance from "../../axios-orders";

configure({ adapter: new Adapter() });

describe("<BurgerBuilder />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
  });

  it("should render <BuilControls /> when receiving ingreditns", () =>
    wrapper.setProps({ ings: { salad: 0 } }));
  expect(wrapper.find(BuildControls)).toHaveLength(1);
});
