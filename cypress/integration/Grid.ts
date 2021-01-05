describe('basic form validation', () => {
  it('Test submit', () => {
    cy.visit('http://localhost:9001/?path=/story/magicformgenerator--submit');
    cy.get('button.custom-submit-class').click();
  });
});
