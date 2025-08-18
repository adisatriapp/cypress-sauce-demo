import Authentication from '../pageObjects/authentication'
import {authData} from '../fixtures/data'

const authentication = new Authentication()

describe('Authentication', () => {
    before(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://www.saucedemo.com/')
    })

    it('#TC-001 - Login with locked_out_user account', () => {
        authentication.login(authData.locked, authData.password)
        authentication.ValidateError(authData.text_error_locked)
    })

    it('#TC-002 - Login with empty username', () => {
        authentication.login('', authData.password)
        authentication.ValidateError(authData.text_error_empty)
        
    })

    it('#TC-003 - Login with empty password', () => {
        authentication.login(authData.standar, '')
        authentication.ValidateError(authData.text_error_empty_password)
        
    })

    it('#TC-004 - Login with invalid credentials', () => {
        authentication.login(authData.invalid, authData.password)
        authentication.ValidateError(authData.text_error_standard)
        
    })


    it('#TC-005 - Login with valid credentials (standard_user)', () => {
        authentication.login(authData.standar, authData.password)
        authentication.ValidateProducts()
        
    })


})