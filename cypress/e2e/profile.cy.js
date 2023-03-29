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
describe("profile page testing", () => {
    beforeEach(()=>{
        auth();
        cy.visit('http://localhost:3000/profile');
    })
    it("profile input value exist or not", () => {
        cy.get('#fname').invoke('val').should('exist');
        cy.get('#lname').invoke('val').should('exist');
        cy.get('#phone').invoke('val').should('exist');
        cy.get('#email').invoke('val').should('exist');
        cy.get('#password').invoke('val').should('exist');
    });
    it("profile input with empty field", () => {
        cy.get('#fname').clear();
        cy.get('#lname').clear();
        cy.get('#phone').clear();
        cy.get('#email').clear();
        cy.get('#save').click();
        cy.url().should('include','/profile');
        cy.get('body').contains('Required');

    });
    it('save with invalid first name',()=>{
        cy.get('#fname').clear().type('Meet@');
        cy.get('#lname').clear().type('Zadafiya');
        cy.get('#phone').clear().type('2365845236');
        cy.get('#email').clear().type('meetz@zignuts.com');
        cy.get('#save').click();
        cy.url().should('include','/profile');
        cy.get('body').contains('first name does not special char');
        
    });
    it("save with invalid last name",()=>{
        cy.get('#fname').clear().type('Meet');
        cy.get('#lname').clear().type('Zadafiya@');
        cy.get('#phone').clear().type('2365845236');
        cy.get('#email').clear().type('meetz@zignuts.com');
        cy.get('#save').click();
        cy.url().should('include','/profile');
        cy.get('body').contains('last name does not special char');
    });
    it("save with invalid mobile number",()=>{
        cy.get('#fname').clear().type('Meet');
        cy.get('#lname').clear().type('Zadafiya');
        cy.get('#phone').clear().type('2365845236688');
        cy.get('#email').clear().type('meetz@zignuts.com');
        cy.get('#save').click();
        cy.url().should('include','/profile');
        cy.get('body').contains('mobile must be 10 number');
    })
    it("save with invalid email",()=>{
        cy.get('#fname').clear().type('Meet');
        cy.get('#lname').clear().type('Zadafiya');
        cy.get('#phone').clear().type('2236584525');
        cy.get('#email').clear().type('meetz.zignuts.com');
        cy.get('#save').click();
        cy.url().should('include','/profile');
        cy.get('body').contains('invalid email format');
    })
});