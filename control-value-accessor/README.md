# ControlValueAccessor

## What is CVA

- Acts like a bridge beetween Angulars Forms API and DOM Native element
- Interaction with a Form Control, implicit created or not (Reactive Forms or Template Driven Forms)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Some questions:

- Para que serve o método registerOnChange?
  - Para passar para o componente uma função que pode ser executada para atualizar o FormControl que está sendo injetado nele.
- Por que utilizar ControlValueAccessor?
  - Abstrair um comportamento dentro de um componente e que esse componente se comunique diretamente com o FormControl/FormGroup definido no componente pai.
- Para que serve o método writeValue?
  - Para o componente pai notificar o componente ControlValueAccessor que o FormControl foi atualizado por fora.
- Para que serve o método registerOnTouched?
  - Para passar para o componente uma função que pode ser executada para marcar o FormControl que está sendo injetado nele como touched.
- Por que precisamos modificar o comportamento do injetor de dependências para o componente que implementa ControlValueAccessor?
  - Para prevenir o Angular de tentar procurar a dependência fora do injetor do componente que implementa o ControlValueAccessor.
- Para que serve o método setDisabledState?
  - Para disabilitar o estado do form control baseando o estado inicial pelo que é definido pelo componente pai
