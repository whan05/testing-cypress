/// <reference types="cypress"/>

describe('Valida el formulario', () => { 
    it("Submir al form y mostrar la alerta de error", () => {
        cy.visit("http://127.0.0.1:5500/index.html")
        cy.get("[data-cy=formulario]")
            .submit()

        cy.get("[data-cy=alerta]")
            .invoke("text")
            .should("equal", "Todos los campos son Obligatorios")

        cy.get("[data-cy=alerta]")
            .should("have.class", "alert-danger")
    })
 })