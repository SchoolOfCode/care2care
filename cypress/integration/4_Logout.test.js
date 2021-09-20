
describe("Log out", () => {
    it("Should be able to click on the menu and log out", () => {
      cy.get("#menu").click();
      cy.get("#logout").click();
    });
  });