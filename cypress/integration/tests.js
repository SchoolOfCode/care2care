describe("Log in to the app", () => {
  it("Renders correctly", () => {
    cy.visit("/");
    cy.findByText("Log In").click();
    cy.findByLabelText("Email address").type("yasmin@email.com");
    cy.findByLabelText("Password").type("yasmin123456!");
    cy.findByText("Continue").click();
  });
});

describe("Search for patient", () => {
  it("Finds a patient", () => {
    cy.get("#search").click();
    cy.get("#searchInput").type("Elvis");
    cy.findByText("Elvis Presley").click();
    cy.findByText(
      "Elvis love singing and performing. But have to be reminded to get some rest and take his medicines."
    ).should("be.visible");
    cy.findByText("Daily Logs").click({ force: true });
  });
});

describe("Nav bar selection", () => {
  it("Should be able to find nav bar", () => {
    cy.findByText("New Record").click();
    cy.findByText("Patient").click();
    cy.findByText("Daily Logs").click();
  });
});

describe("Log out from app", () => {
  it("Should be able to click on the menu and log out", () => {
    cy.get("#menu").click();
    cy.get("#logout").click();
  });
});
