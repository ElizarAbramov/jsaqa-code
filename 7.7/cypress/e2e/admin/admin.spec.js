const login_as_admin = require("../../fixtures/login_as_admin.json");

it("Should log in as admin", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.get(login_as_admin.loginTitle).should("be.visible");
    cy.get(login_as_admin.emailSelector).type(login_as_admin.email);
    cy.get(login_as_admin.passSelector).type(login_as_admin.pass);
    cy.get(login_as_admin.loginButton).click();
    cy.contains("Управление залами").should("be.visible");
});

it("Should not log in as admin", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.get(login_as_admin.loginTitle).should("be.visible");
    cy.get(login_as_admin.emailSelector).type(login_as_admin.email);
    cy.get(login_as_admin.passSelector).type(login_as_admin.wrongPass);
    cy.get(login_as_admin.loginButton).click();
    cy.contains("Ошибка авторизации").should("be.visible");
});