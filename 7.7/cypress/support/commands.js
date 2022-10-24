const seats = require("../fixtures/seats.json");

Cypress.Commands.add('choosePlace', seats, () => {
    seats.forEach((seat) => {
        cy.get(
            `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
        ).click();
    });
})