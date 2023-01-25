/// <reference types="cypress"/>

describe('Llenar los campos para una nueva cita y la edita', () => { 

    it("Campos nueva cita", () => {
        cy.visit("http://127.0.0.1:5500/index.html")

        cy.get("[data-cy=mascota-input]")
            .type("hook")

        cy.get("[data-cy=propietario-input]")
            .type("Whanderley")

        cy.get("[data-cy=telefono-input]")
            .type("12345678")

        cy.get("[data-cy=fecha-input]")
            .type("2020-10-20")

        cy.get("[data-cy=hora-input]")
            .type("10:30")

        cy.get("[data-cy=sintomas-textarea]")
        .type("Solo come y duerme")
        
        cy.get("[data-cy=submit-cita]")
            .click()

        cy.get("[data-cy=citas-heading]")
            .invoke("text")
            .should("equal", "Administra tus Citas")

        cy.get("[data-cy=alerta]")
            .invoke("text")
            .should("equal", "Se agregó correctamente")

        cy.get("[data-cy=alerta]")
            .should("have.class", "alert-success")
    })

    it("Edita la cita", () => {
        cy.get('[data-cy="btn-editar"]').click()

        cy.get("[data-cy=mascota-input]")
            .clear()
            .type("Nuevo Hook")

        cy.get("[data-cy=submit-cita]")
            .click()

        cy.get("[data-cy=alerta]")
            .invoke("text")
            .should("equal", "Guardado Correctamente")
        
        cy.get("[data-cy=alerta]")
            .should("have.class", "alert-success")
    })
 })