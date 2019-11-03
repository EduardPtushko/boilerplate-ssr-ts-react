import React from "react";
import { shallow } from "enzyme";
import App from "../App";

test("should render correctly", (): void => {
    const wrapper = shallow(<App />);
});
