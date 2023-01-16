describe("template spec", () => {
  it("Navigates to Home page on menu button click", () => {
    cy.visit("/home");

    cy.get(".MuiToolbar-root > .MuiTypography-button").click();
    cy.location("pathname").should("eq", "/home");
  })

  it("Navigates to all coins page", () => {
    cy.visit("/home");

    cy.get('.css-1o5pq7n > .MuiDrawer-root > .MuiPaper-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click();
    cy.location("pathname").should("eq", "/coins/all");
  });
})

export {}