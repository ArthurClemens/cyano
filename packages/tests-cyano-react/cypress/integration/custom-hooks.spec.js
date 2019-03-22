/* global cy, describe, before, it */

describe("Custom hooks", () => {
  before(() => {
    cy.visit("/TestCustomHooks");
  });
  it("should use a custom hook counter function", () => {
    cy.get("[data-test-id=TestCounter] [data-test-id=count]").should("contain", "0");
    cy.get("[data-test-id=TestCounter] [data-test-id=increment]").click();
    cy.get("[data-test-id=TestCounter] [data-test-id=count]").should("contain", "1");
    cy.get("[data-test-id=TestCounter] [data-test-id=decrement]").click();
    cy.get("[data-test-id=TestCounter] [data-test-id=count]").should("contain", "0");
  });

  it("should use a custom hook that references another hook", () => {
    cy.get("[data-test-id=TestCounters] [data-test-id=counters]").should("contain", "1");
    cy.get("[data-test-id=TestCounters] [data-test-id=increment]").click();
    cy.get("[data-test-id=TestCounters] [data-test-id=counters]").should("contain", "2");
    cy.get("[data-test-id=TestCounters] [data-test-id=decrement]").click();
    cy.get("[data-test-id=TestCounters] [data-test-id=counters]").should("contain", "1");
  });
});
