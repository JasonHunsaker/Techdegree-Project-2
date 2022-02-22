/// <reference types="cypress" />

const { verify } = require("crypto")

it('should use the search bar to filter names', ()=> {
    cy.visit('http://localhost:52330/index.html')

    cy.get(':nth-child(3) > button').click()

    //cy.get('#search').type('martin')
    })
