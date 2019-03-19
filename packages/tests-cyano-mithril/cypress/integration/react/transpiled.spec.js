/* global cy, describe, before, it */
import tests from "../shared/custom-hooks";

describe("React custom hooks - transpiled", () => {
  before(() => {
    cy.visit("/react/transpiled");
  });
  tests();
});
