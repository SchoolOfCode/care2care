describe("Search for patient", () => {
  it("Should be able to click on the search icon and type and filter the name of the patient", () => {
    cy.get("#search").click();
    cy.get("#searchInput").type("Elvis");
    cy.findByText("Elvis Presley").click();
  });
});

describe("Find NavBar - part2", () => {
  it("Should be able to see all the information for the selected patient", () => {
    cy.findByText("New Record").click();
    cy.findByText("Patient").click();
    cy.findByText(
      "Elvis love singing and performing. But have to be reminded to get some rest and take his medicines."
    ).should("be.visible");
    cy.findByText("Daily Logs").click({ force: true });
    cy.get(".sc-bkzYnD > :nth-child(1) > :nth-child(2) > p")
      .findByText(
        "Elvis have always been a positive energy in the building. He likes to sing and perform in front of the other patients. He is not showing of slowing down."
      )
      .should("be.visible");
  });
});
