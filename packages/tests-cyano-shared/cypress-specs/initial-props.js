/* global cy, describe, before, it */

describe("Initial props", () => {

  before(() => {
    cy.visit("/TestInitialProps");
  });

  it("should render initial props", () => {
    cy.get("[data-test-id=InitialProps]").should("contain", "Hello");
  });

});
