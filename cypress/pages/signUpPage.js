import userData from "../fixtures/userData.json"

class signUpPage {

    selectorsList() {
        const selectors = {
            firstNameField : "[name='firstName']",
            firstNameText : "#firstName-helper-text",
            lastNameField : "[name='lastName']",
            lastNameText : "#lastName-helper-text",
            usernameField : "[name='username']",
            usernameText : "#username-helper-text",
            passwordField : "[name='password']",
            passwordText : "#password-helper-text",
            confirmPasswordField: "[name='confirmPassword']",
            confirmPasswordText: "#confirmPassword-helper-text",
            submitButton: "[type='submit']"
            
        }
        return selectors
    }

    successSignup() {
        cy.get(this.selectorsList().firstNameField).type("FirstNameTest")
        cy.get(this.selectorsList().lastNameField).type("LastNameTest")
        cy.get(this.selectorsList().usernameField).type(userData.userSuccess.username)
        cy.get(this.selectorsList().passwordField).type(userData.userSuccess.password)
        cy.get(this.selectorsList().confirmPasswordField).type(userData.userSuccess.password)
        cy.get(this.selectorsList().submitButton).click()
    }

    confirmsuccessSignup() {
        cy.url().should('eq', 'http://localhost:3000/signin')
    }

    failSignupFirstName() {
        cy.get(this.selectorsList().lastNameField).type("LastNameTest")
        cy.get(this.selectorsList().usernameField).type(userData.userSuccess.username)
        cy.get(this.selectorsList().passwordField).type(userData.userSuccess.password)
        cy.get(this.selectorsList().confirmPasswordField).type(userData.userSuccess.password)
        cy.get(this.selectorsList().firstNameText).should('be.visible')
    }

    failSignupLastName() {
        cy.get(this.selectorsList().firstNameField).type("FirstNameTest")
        cy.get(this.selectorsList().lastNameField).click()
        cy.get(this.selectorsList().usernameField).type(userData.userSuccess.username)
        cy.get(this.selectorsList().passwordField).type(userData.userSuccess.password)
        cy.get(this.selectorsList().confirmPasswordField).type(userData.userSuccess.password)
        cy.get(this.selectorsList().lastNameText).should('be.visible')
    }

    failSignupUsername() {
        cy.get(this.selectorsList().firstNameField).type("FirstNameTest")
        cy.get(this.selectorsList().lastNameField).type("LastNameTest")
        cy.get(this.selectorsList().usernameField).click()
        cy.get(this.selectorsList().passwordField).type(userData.userSuccess.password)
        cy.get(this.selectorsList().confirmPasswordField).type(userData.userSuccess.password)
        cy.get(this.selectorsList().usernameText).should('be.visible')
    }

    failSignupPassword() {
        cy.get(this.selectorsList().firstNameField).type("FirstNameTest")
        cy.get(this.selectorsList().lastNameField).type("LastNameTest")
        cy.get(this.selectorsList().usernameField).type(userData.userSuccess.username)
        cy.get(this.selectorsList().passwordField).click()
        cy.get(this.selectorsList().confirmPasswordField).type(userData.userSuccess.password)
        cy.get(this.selectorsList().passwordText).should('be.visible')
    }
    failSignupPasswordConfirm() {
        cy.get(this.selectorsList().firstNameField).type("FirstNameTest")
        cy.get(this.selectorsList().lastNameField).type("LastNameTest")
        cy.get(this.selectorsList().usernameField).type(userData.userSuccess.username)
        cy.get(this.selectorsList().passwordField).type(userData.userSuccess.password)
        cy.get(this.selectorsList().confirmPasswordField).click()
        cy.get(this.selectorsList().passwordField).click()
        cy.get(this.selectorsList().confirmPasswordText).should('be.visible')
    }
}

export default signUpPage