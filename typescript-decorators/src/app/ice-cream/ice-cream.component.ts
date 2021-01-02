import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ice-cream',
  template: `
    <p>is that a flavor: {{ flavor }}</p>
    <p>{{ toppings }}</p>
  `,
})
export class IceCreamComponent {
  constructor() {}

  @Emoji()
  flavor = 'vannila';

  toppings = [];

  @Confirmable('Are you sure?')
  @Confirmable('Are you super, super sure? There is no going back!')
  addTopping(topping) {
    this.toppings.push(topping);
  }
}

// Property decorator example
function Emoji() {
  return (target: Object, key: string | symbol) => {
    let val = target[key];

    const getter = () => {
      return val;
    };
    const setter = (next: string) => {
      console.log('updating flavor...');
      val = `🍦 ${next} 🍦`;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

// Method Decorator
function Confirmable(message: string) {
  return (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const allow = confirm(message);

      if (allow) {
        const result = original.apply(this, args);
        return result;
      } else {
        return null;
      }
    };

    return descriptor;
  };
}
