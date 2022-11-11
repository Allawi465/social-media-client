describe('logout', () => {
  const email = Cypress.env('email');
  const password = Cypress.env('password');

  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });

  it('logout user', () => {
    cy.visit('/');
    cy.wait(500);
    cy.get("button[type='reset']:visible").click();
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(500);
    cy.get("input[type='email']:visible").should('exist').type(`${email}`);
    cy.wait(500);
    cy.get("input[type='password']:visible")
      .should('exist')
      .type(`${password}`);
    cy.wait(500);
    cy.get("button[type='submit']:visible").click();
    cy.wait(2000);
    cy.then(
      () => expect(window.localStorage.getItem('profile')).to.not.be.null
    );
    cy.then(() => expect(window.localStorage.getItem('token')).to.not.be.null);
    cy.wait(2000);
    cy.get("button[data-auth='logout']").click();
    cy.then(() => expect(window.localStorage.getItem('profile')).to.be.null);
    cy.then(() => expect(window.localStorage.getItem('token')).to.be.null);
  });
});
