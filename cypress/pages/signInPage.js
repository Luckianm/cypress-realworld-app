import userData from "../fixtures/userData.json"


class signInPage {

    selectorsList() {
        const selectors = {
            usernameField   : "#username",
            passwordField   : "#password",
            submitButton    : "[type='submit']",
            signInError     : "[data-test='signin-error']",
            signupLink      : "[data-test='signup']"

        }
        return selectors
    }

    accessSigninPage() {
        cy.visit('http://localhost:3000/signin')
    }

    successfullyLogin() {
        cy.get(this.selectorsList().usernameField).type(userData.userSuccess.username)
        cy.get(this.selectorsList().passwordField).type(userData.userSuccess.password)
        cy.get(this.selectorsList().submitButton).click()
        cy.url().should('eq', 'http://localhost:3000/')
    }

    failedLogin(){
        cy.get(this.selectorsList().usernameField).type(userData.userFail.username)
        cy.get(this.selectorsList().passwordField).type(userData.userFail.password)
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().signInError)
    }


    clickSignUp() {
       cy.get(this.selectorsList().signupLink).click()
    }
}

export default signInPage