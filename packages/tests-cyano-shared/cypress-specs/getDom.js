/* global cy, describe, before, it */

describe("getDom", () => {

  before(() => {
    cy.visit("/GetDom");
  });

  it("should fetch the dom contents", () => {
    cy.get("[data-test-id=textContent]").contains("QWERTY");
  });

});
