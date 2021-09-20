describe("Find NavBar", () => {
  it("Should be able to find the nav bar and click in all of the components", () => {
    cy.findByText("New Record").click();
    cy.findByText("Patient").click();
    cy.findByText("Daily Logs").click();
  });
});

