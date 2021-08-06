/* global cy, describe, before, it */

describe('getRef', () => {
  before(() => {
    cy.visit('/GetRef');
  });

  it('should fetch the dom contents', () => {
    cy.get('[data-test-id=textContent]').contains('QWERTY');
  });
});
