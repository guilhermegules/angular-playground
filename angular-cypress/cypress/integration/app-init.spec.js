describe("App initialization", () => {
  it("Displays all the todos from API on load", () => {
    // Other way to get data from fixtures
    // cy.fixture("todos").then((todos) => {
    //   cy.intercept("/ToDoModels", todos);
    // });
    // cy.intercept("/ToDoModels", "fixture:todos");
    // cy.intercept("/ToDoModels", "fixture:todos").as('load');
    cy.seedAndVisit();

    // cy.wait('@load') Will wait my "route" to complete

    cy.get(".task-wrapper").should("have.length", 4);
  });
});
