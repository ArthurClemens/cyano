/* global cy, describe, before, it */

describe('Forward ref', () => {
  before(() => {
    cy.visit('/ForwardRef');
  });

  it('should get the ref', () => {
    cy.get('[data-test-id=component-parent] [data-test-id=domElement]').should(
      'contain',
      'input',
    );
    cy.get('[data-test-id=component-input] [data-test-id=domElement]').should(
      'contain',
      'input',
    );
  });
});
