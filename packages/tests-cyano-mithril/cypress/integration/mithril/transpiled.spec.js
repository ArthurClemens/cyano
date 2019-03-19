/* global cy, describe, before, it */
import tests from "../shared/custom-hooks";

describe("Mithril custom hooks - transpiled", () => {
  before(() => {
    cy.visit("/mithril/transpiled");
  });
  tests();
});
