import { Component } from '@angular/core';

@Component({
  selector: 'app-hook',
  template: `
    <p>You clicked {{count.value}} times</p>
    <button (click)="setCount(count.value + 1)">Click me</button>
  `
})
export class HookComponent {
  @UseState(0) count; setCount;

  @UseEffect()
  onEffect() {
    document.title = `You clicked ${this.count.value} times`;
  }

  constructor() { }

}

/// Implementation Details:
function UseEffect() {
  return (target, key, descriptor) => {
    target.ngOnInit = descriptor.value;
    target.ngAfterViewChecked = descriptor.value;
  };
}

function UseState(seed: any) {
  return (target, key) => {
    target[key] = seed;
    target[`set${key.replace(/^\w/, c => c.toUpperCase())}`] = (val) => target[key] = val;
  };
}

@Frozen
class IceCream {}

function Frozen(constructor) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

console.log(Object.isFrozen(IceCream)); // true

class FroYo extends IceCream {} // error, cannot be extended
