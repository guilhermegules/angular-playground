# NgSignals

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Signals study

- Signals are called the new primitive reactive type
  - We can transform signals to observables and vice versa
    - `toSignal`
    - `toObservable`
  - We can use signals to control local component state, global state in services and any other type of reactive state
- An observable is like a stream of data. We need to subscribe to access the emitted values.
- A signal is like a wrapper box that contains the value. This box knows when a read or write has happened (that’s what makes signals reactive).
  - Signals always have an initial value, but an observable may not always have one. For that, there is the initialValue option:
    - `const price = toSignal(price$, { initialValue: 0 });`
  - Next, some observables emit synchronously. This is covered by the requireSync option:
    - ```
      const price$ = new BehaviorSubject(99);
      const price: Signal<number> = toSignal(price$, { requireSync: true });
      ```
  - Lastly, the subscribe method has three types of notifications — `next`, `error`, and `complete`. For a signal created by the `toSignal` function, the following apply:
    - The signal’s value is whatever is emitted from the next notification of the observable;
    - When an error notification is received, the signal will throw that error the next time it is read;
    - The concept of being “complete” doesn’t apply to signals. When an observable completes, the signal simply stops receiving new values from the stream.
