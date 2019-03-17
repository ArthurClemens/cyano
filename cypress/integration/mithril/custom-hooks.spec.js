/* global cy, describe, before, it */
import tests from "../shared/custom-hooks";

describe("Mithril custom hooks", () => {
  before(() => {
    cy.visit("/mithril/custom-hooks");
  });
  tests();
});
