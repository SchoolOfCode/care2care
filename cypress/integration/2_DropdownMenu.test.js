describe("Add New Patient", () => {
  it("Should be able to click on the menu and click on add new patient link", () => {
    cy.get("#menu").click();
    cy.findByText("Add New Patient").click();
  });
});

describe("Change Theme", () => {
  it("Should be able to click on the menu and change the theme to dark/light mode", () => {
    cy.get("#menu").click();
    cy.get("#toggle > label").click();
    cy.get("#switch").should("be.checked");
    cy.get("#toggle > label").click();
    cy.get("#switch").should("not.be.checked");
  });
});
