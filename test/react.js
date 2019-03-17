/* global describe, it */
import "./setup";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
global.React = React;
import { expect } from "chai";
import { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

const { createComponent } = require("../dist/react/cyano.js");
const { createReactComponent } = require("../dist/cyano.js");
const { Counter } = require("./counter");
const { customHooks } = require("./custom-hooks");

const test = Component => {
  const expected = `<div><div class="count"><span>10</span></div><button>More</button><div class="counters"><span>1</span></div><button>Remove counter</button><button>Add counter</button></div>`;
  const wrapper = mount(<Component initialCount={10} />);
  return expect(wrapper.html()).to.equal(expected);
};

describe("react component", function() {
  it("should render with createComponent ", function() {
    const ReactCounter = createComponent(Counter, customHooks);
    return test(ReactCounter);
  });
  it("should render with createReactComponent ", function() {
    const ReactCounter = createReactComponent(Counter, customHooks);
    return test(ReactCounter);
  });
});
