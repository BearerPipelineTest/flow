class C {
  x: number;
  constructor () {
    this.x = 0;
  }
  foo() {
    return this.x;
  }
}

var c = new C();
var x: string = c.foo(); // ERROR: number =/= string

function foo() { return this.y; }
function bar() { return this.foo(); }
var o = { y: "", foo: foo, bar: bar };
var o2 = { y: 0, foo: foo, bar: bar };

o.bar();
var y: number = o2.bar();
