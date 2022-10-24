const booking = require("../fixtures/to_book.json");
const seats = require("../fixtures/seats.json");

it("Should be possible to book", () => {
    cy.visit("qamid.tmweb.ru");
    cy.get(booking.dayButton).click();
    cy.get(booking.timeButton).click();
    cy.choosePlace(seats);
    cy.get(booking.acceptButton).click();
    cy.contains("Вы выбрали билеты:").should("be.visible");
});