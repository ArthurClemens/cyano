/* global cy, describe, before, it */

describe('h.trust', () => {
  before(() => {
    cy.visit('/TestTrust');
  });

  it('should show SVG content', () => {
    cy.get('[data-test-id=svg] svg')
      .children('path')
      .should('have.attr', 'd')
      .should('exist');
  });

  it('should show HTML content', () => {
    cy.get('[data-test-id=html]').contains('ul', 'Skydiving').should('exist');
    cy.get('[data-test-id=html]').contains('ul', 'Alaska').should('exist');
    cy.get('[data-test-id=html]')
      .contains('ul', 'Kite surfing')
      .should('exist');
  });

  it('should use a wrapper element', () => {
    cy.get('[data-test-id=wrapper]').contains('span', 'Hello').should('exist');
  });
});
