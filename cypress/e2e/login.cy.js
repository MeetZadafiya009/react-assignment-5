/// <reference types='cypress' />
describe("Login Page", () => {
    it.only("visibility of login page element", () => {
        cy.visit('http://localhost:3000/login');
        cy.get('#login').should('be.visible');
        cy.get('#email').should('be.visible');
        cy.get('#password').should('be.visible');
    })
    
    it.only("login test with wrong email", () => {
        cy.visit('http://localhost:3000/login');
        cy.get('#email').type('meetzd@zignuts.com');
        cy.get('#password').type('Meet@1');
        cy.get('#login').click();
        cy.url().should('include', '/login');
    })
    it.only("login test with wrong password", () => {
        cy.visit('http://localhost:3000/login');
        cy.get('#email').type('meetzd@zignuts.com');
        cy.get('#password').type('Meet@123');
        cy.get('#login').click();
        cy.url().should('include', '/login');
    })
    it.only('login test with correct creditials', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('#email').type('meetz@zignuts.com');
        cy.get('#password').type('Meet@1');
        cy.get('#login').click();
        cy.url().should('include', '/');
    });

})