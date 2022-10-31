const mainPage = require("../../fixtures/checkDays.json");

it("Should check number of days", () => {
    cy.visit("qamid.tmweb.ru");
    cy.get(mainPage.numberOfDays).should("have.length", 7);
});