/* global cy, describe, before, it */
import tests from "../shared/custom-hooks";

describe("React custom hooks", () => {
  before(() => {
    cy.visit("/react/custom-hooks");
  });
  tests();
});
