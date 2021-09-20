describe("Log in", () => {
    it("Should be able to click on the log in button and type in the email and password", () => {
      cy.visit("/");
      cy.findByText("Log In").click();
      cy.findByLabelText("Email address").type("yasmin@email.com");
      cy.findByLabelText("Password").type("yasmin123456!");
      cy.findByText("Continue").click();
    });
  });