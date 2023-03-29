describe("signup page testing", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/signup');
    })
    it("visibility of element", () => {
        cy.get('#fname').should('be.visible');
        cy.get('#lname').should('be.visible');
        cy.get('#email').should('be.visible');
        cy.get('#phone').should('be.visible');
        cy.get('#password').should('be.visible');
        cy.get('#cpassword').should('be.visible');
        cy.get('#register').should('be.visible');
    });
    it("register with wrong lname", () => {
        cy.get('#fname').type('Rohit');
        cy.get('#lname').type('Sharma@');
        cy.get('#phone').type('2646446646');
        cy.get('#email').type('rohitsharma@gmai.com');
        cy.get('#password').type('Rohit@123');
        cy.get('#cpassword').type('Rohit@123');
        cy.get('#register').click();
        cy.url().should('include', '/signup');
    })
    it("register with wrong fname", () => {
        cy.get('#fname').type('Rohit@');
        cy.get('#lname').type('Sharma');
        cy.get('#phone').type('2646446646');
        cy.get('#email').type('rohitsharma@gmai.com');
        cy.get('#password').type('Rohit@123');
        cy.get('#cpassword').type('Rohit@123');
        cy.get('#register').click();
        cy.url().should('include', '/signup');
    })
    it("register with more than 10 number", () => {
        cy.get('#fname').type('Rohit');
        cy.get('#lname').type('Sharma');
        cy.get('#phone').type('2646446646000');
        cy.get('#email').type('rohitsharma@gmai.com');
        cy.get('#password').type('Rohit@123');
        cy.get('#cpassword').type('Rohit@123');
        cy.get('#register').click();
        cy.url().should('include', '/signup');
    })
    it("register with less than than 10 number", () => {
        cy.get('#fname').type('Rohit');
        cy.get('#lname').type('Sharma');
        cy.get('#phone').type('26464');
        cy.get('#email').type('rohitsharma@gmai.com');
        cy.get('#password').type('Rohit@123');
        cy.get('#cpassword').type('Rohit@123');
        cy.get('#register').click();
        cy.url().should('include', '/signup');
    })
    it("register with wrong email format", () => {
        cy.get('#fname').type('Rohit');
        cy.get('#lname').type('Sharma');
        cy.get('#phone').type('2646446646');
        cy.get('#email').type('rohitsharmagmai..com');
        cy.get('#password').type('Rohit@123');
        cy.get('#cpassword').type('Rohit@123');
        cy.get('#register').click();
        cy.url().should('include', '/signup');
    })
    it("register with less password requirement", () => {
        cy.get('#fname').type('Rohit');
        cy.get('#lname').type('Sharma');
        cy.get('#phone').type('2646446646');
        cy.get('#email').type('rohitsharma@gmai.com');
        cy.get('#password').type('Rohit');
        cy.get('#cpassword').type('Rohit@123');
        cy.get('#register').click();
        cy.url().should('include', '/signup');
    })
    it("register with different password", () => {
        cy.get('#fname').type('Rohit');
        cy.get('#lname').type('Sharma');
        cy.get('#phone').type('2646446646');
        cy.get('#email').type('rohitsharma@gmai.com');
        cy.get('#password').type('Rohit@4567');
        cy.get('#cpassword').type('Rohit@123');
        cy.get('#register').click();
        cy.url().should('include', '/signup');
    })
    it('register with validation', () => {
        cy.get('#fname').type('Rohit');
        cy.get('#lname').type('Sharma');
        cy.get('#phone').type('2646446646');
        cy.get('#email').type('rohitsharma@gmai.com');
        cy.get('#password').type('Rohit@123');
        cy.get('#cpassword').type('Rohit@123');
        cy.get('#register').click();
        cy.url().should('include', '/login');
    })
})