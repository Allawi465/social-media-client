describe('Social media app', () => {
  const password = Cypress.env('password');

  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });

  it('login with valid email and password', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get("form#registerForm > div.modal-header > button[type='button']")
      .should('have.class', 'btn-close')
      .click({ force: true });
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(1000);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type(`MohAll71237@stud.noroff.no`);
    cy.get("input[type='password']:visible")
      .should('exist')
      .type(`${password}`);
    cy.get('.btn-success:visible').click();
    cy.wait(1000);
    cy.then(
      () => expect(window.localStorage.getItem('profile')).to.not.be.null
    );
    cy.then(() => expect(window.localStorage.getItem('token')).to.not.be.null);
    cy.url().should('include', 'profile');
  });

  it('login with invalid email and password', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get("form#registerForm > div.modal-header > button[type='button']")
      .should('have.class', 'btn-close')
      .click({ force: true });
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(1000);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type(`test@stud.noroff.no`);
    cy.get("input[type='password']:visible").should('exist').type(`test`);
    cy.get('.btn-success:visible').click();
    cy.wait(1000);
    cy.then(
      () => expect(window.localStorage.getItem('profile')).to.not.be.null
    );
    cy.then(() => expect(window.localStorage.getItem('token')).to.not.be.null);
    cy.url().should('include', 'profile');
  });
});
