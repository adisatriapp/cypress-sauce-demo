import Authentication from '../pageObjects/authentication'
import {authData} from '../fixtures/data'

const authentication = new Authentication()

describe('Authentication', () => {
    before(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login with locked user', () => {
        authentication.login(authData.locked, authData.password)
        authentication.ValidateError(authData.text_error_locked)
    })

    it('Login with problem user', () => {
        authentication.login(authData.problem, authData.password)
        authentication.ValidateProducts_UserProblem()
        authentication.logout()
    })

    it('Login with performance user', () => {
        authentication.login(authData.performance, authData.password)
        authentication.ValidateProducts_UserProblem()
        authentication.logout()
    })

    it('Login with visual user', () => {
        authentication.login(authData.visual, authData.password)
        authentication.ValidateProducts_UserProblem()
        authentication.logout()
    })

    it('Login with error user', () => {
        authentication.login(authData.error, authData.password)
        authentication.ValidateProducts_UserProblem()
        authentication.logout()
    })

    it('Login with standard user', () => {
        authentication.login(authData.standar, authData.password)
        authentication.ValidateProducts_UserProblem()
    })

})