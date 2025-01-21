import {authData, productsData} from '../fixtures/data'
import {field, button, text} from '../fixtures/elements'

class Authentication {
    login(username, password) {
        cy.input_text(field.username, username)
        cy.input_text(field.password, password)
        cy.click_button(button.login)
    }

    ValidateError(error) {
        cy.get(text.error_text).should('contain', error)
    }

    ValidateProducts_UserProblem() {
        cy.get(text.products).should('contain', productsData.products1)
        cy.get(text.products).should('contain', productsData.products2)
        cy.get(text.products).should('contain', productsData.products3)
        cy.get(text.products).should('contain', productsData.products4)
        cy.get(text.products).should('contain', productsData.products5)
        
    }

    logout() {
        cy.get("#react-burger-menu-btn").click()
        cy.get('[data-test="logout-sidebar-link"]').click()
    }
}

export default Authentication