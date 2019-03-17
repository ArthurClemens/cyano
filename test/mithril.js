/* global describe, it */
"use strict";

const assert = require("assert");
require("mithril/test-utils/browserMock")(global);
const m = require("mithril");
global.m = m;
const render = require("mithril-node-render");
const debug = require("./debug");
const { createComponent } = require("../dist/mithril/cyano.js");
const { createMithrilComponent } = require("../dist/cyano.js");
const { Counter } = require("./counter");
const { customHooks } = require("./custom-hooks");

const test = Component => {
  const expected = `<div><div class="count"><span>10</span></div><button>More</button><div class="counters"><span>1</span></div><button>Remove counter</button><button>Add counter</button></div>`;
  return render([
    m(Component, {
      initialCount: 10
    })
  ]).then(actual => {
    if (actual !== expected) {
      debug(actual, expected);
    }
    return assert(actual === expected);
  });
};

describe("mithril component", function() {
  it("should render with createComponent", function() {
    const MithrilCounter = createComponent(Counter, customHooks);
    return test(MithrilCounter);
  });
  it("should render with createMithrilComponent", function() {
    const MithrilCounter = createMithrilComponent(Counter, customHooks);
    return test(MithrilCounter);
  });
});
