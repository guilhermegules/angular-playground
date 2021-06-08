describe("Simple test", () => {
  it("Works", () => {
    expect(true).to.equal(true);
  });

  it("Visits the app", () => {
    cy.visit("/");
  });
});
