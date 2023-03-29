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
describe("logout testing",()=>{
    beforeEach(()=>{
        auth();
    });
    it("click on logout should redirect login page",()=>{
        cy.get('#avtar').click();
        cy.get('#Logout').should('be.visible');
        cy.get('#Logout').click();
        cy.url().should('include','/login');
    })
})