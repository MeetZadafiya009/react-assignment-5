const auth=()=>{
    cy.visit('http://localhost:3000/signup');
        // register user
        cy.get('#fname').type('Rohit');
        cy.get('#lname').type('Sharma');
        cy.get('#phone').type('2646446646');
        cy.get('#email').type('rohitsharma@gmai.com');
        cy.get('#password').type('Rohit@123');
        cy.get('#cpassword').type('Rohit@123');
        cy.get('#register').click();
        // login credinitails
        cy.get('#email').type('rohitsharma@gmai.com');
        cy.get('#password').type('Rohit@123');
        cy.get('#login').click();
        cy.url().should('include', '/');
}
describe("product detail page testing",()=>{
    beforeEach(()=>{
        auth();
    })
    it("product visible or not",()=>{
        cy.get('.link:first()').click();
        cy.get('#single-product').should('be.visible');
    })
});