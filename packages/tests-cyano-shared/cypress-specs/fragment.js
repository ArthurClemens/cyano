/* global cy, describe, before, it */

describe("Fragment", () => {

  before(() => {
    cy.visit("/Fragment");
  });

  it("should render fragment", () => {
    cy.get("[data-test-id=wrapper]").children().should("have.length", 4);
    cy.get("[data-test-id=child-1]").should("exist").should("contain", "1");
    cy.get("[data-test-id=child-2]").should("exist").should("contain", "2");
    cy.get("[data-test-id=child-3]").should("exist").should("contain", "3");
    cy.get("[data-test-id=child-4]").should("exist").should("contain", "4");
  });

});
