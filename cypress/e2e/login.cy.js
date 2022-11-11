describe('login', () => {
  const email = Cypress.env('email');
  const password = Cypress.env('password');

  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });

  it('login with valid email and password', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get("button[type='reset']:visible").click();
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(1000);
    cy.get("input[type='email']:visible").should('exist').type(`${email}`);
    cy.get("input[type='password']:visible")
      .should('exist')
      .type(`${password}`);
    cy.get("button[type='submit']:visible").click();
    cy.wait(2000);
    cy.then(
      () => expect(window.localStorage.getItem('profile')).to.not.be.null
    );
    cy.then(() => expect(window.localStorage.getItem('token')).to.not.be.null);
    cy.url().should('include', 'profile');
  });

  it('get alert when login with invalid email and password', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get("button[type='reset']:visible").click();
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(1000);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type(`test@2stud.noroff.no`);
    cy.get("input[type='password']:visible").should('exist').type(`test123`);
    cy.get("button[type='submit']:visible").click();
    cy.wait(2000);
    cy.on('window:alert', (test) => {
      expect(test).to.equal(
        'Either your username was not found or your password is incorrect'
      );
    });
    cy.then(() => expect(window.localStorage.getItem('profile')).to.be.null);
    cy.then(() => expect(window.localStorage.getItem('token')).to.be.null);
    cy.url().should('not.include', 'profile');
  });
});
