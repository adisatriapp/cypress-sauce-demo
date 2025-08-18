import {authData, productsData} from '../fixtures/data'
import {field, button, text} from '../fixtures/elements'


class product {
    validateURL(){
        cy.url().should('include', '/inventory.html')
    }
}