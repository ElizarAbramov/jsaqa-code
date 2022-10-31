const mainPage = require("../../fixtures/mainPage.json");

it("Should show main page correctly", () => {
    cy.visit("qamid.tmweb.ru");
    cy.get(mainPage.moviePicture).should("be.visible");
});