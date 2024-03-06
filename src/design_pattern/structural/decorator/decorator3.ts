(() => {
  // component interface
  interface IValue {
    value: number;
  }

  // need component, decorator

  class Value implements IValue {
    value: number;
    constructor(value: number) {
      this.value = value;
    }
  }

  // decorator
  class _Add implements IValue {
    value: number;

    constructor(num1: number | IValue, num2: number | IValue) {
      const left = Object.prototype.hasOwnProperty.call(num1, "value")
        ? (num1 as IValue).value
        : (num1 as number);

      const right = Object.prototype.hasOwnProperty.call(num2, "value")
        ? (num2 as IValue).value
        : (num2 as number);

      this.value = left + right;
    }
  }

  //   function to avoid doing new _Add() many time
  function Add(num1: number | IValue, num2: number | IValue) {
    return new _Add(num1, num2);
  }

  // client code
  const A = new Value(10);
  const B = new Value(20);
  const C = new Value(30);

  console.log(Add(A, B).value); // 30
  console.log(Add(A, 20).value); // 30
  console.log(Add(A, Add(B, C)).value); // 60
  console.log(Add(A, Add(B, Add(A, C))).value); // 70
  console.log(Add(A, Add(B, Add(A, 100))).value); // 140
  console.log(Add(10, Add(B, Add(A, 100))).value); // 140
})();
