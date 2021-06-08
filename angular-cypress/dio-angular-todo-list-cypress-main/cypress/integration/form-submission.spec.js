describe("Form input", () => {
  it("Adds a new todo item", () => {
    const newTodo = { id: 123, title: "Buy pizza", completed: false };

    cy.server();
    cy.route({
      method: "POST",
      url: "/ToDoModels",
      response: newTodo,
    }).as("save");

    cy.seedAndVisit();

    cy.fixture("todos").then((todos) => {
      cy.route({
        method: "GET",
        url: "/ToDoModels",
        response: [...todos, newTodo],
      }).as("second-load");
    });

    cy.get(".new-todo").type(newTodo).type("{enter}");

    cy.wait("@save");
    cy.wait("@second-load");

    cy.get(".task-wrapper").should("have.length", 5);
  });

  it("Shows error message for a failed submission", () => {
    const newTodo = "Buy pizza";

    cy.server();
    cy.route({
      method: "POST",
      url: "/ToDoModels",
      status: 500,
      response: {},
    }).as("save");

    cy.seedAndVisit();

    cy.get(".new-todo").type(newTodo).type("{enter}");

    cy.wait("@save");

    cy.get(".task-wrapper").should("have.length", 4);

    cy.on("window:alert", (text) => {
      expect(text).to.contains("500");
    });
  });
});
