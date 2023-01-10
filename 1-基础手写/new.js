// 返回不同类型时的表现
// 1、无return
function Foo(age) {
    this.age = age;
}
var o = new Foo(111);
console.log(o);  // {age: 111}

// 2、return 对象类型
function Foo(age) {
    this.age = age;
    return ['显式返回'];
}
var o = new Foo(222);
console.log(o);  // ['显式返回']

// 3、return 基础类型
function Foo(age) {
    this.age = age;
    return 1;
}
var o = new Foo(333);
console.log(o);  // // {age: 333}

/*===================================================================================================================================== */

// 手写new
function _new() {
    // 检验第一个参数是不是函数。不是函数返回提示信息
    if (Object.prototype.toString.call(arguments[0]) !== "[object Function]") {
        throw "The first parameter must be a function.";
    }
    let o = {};
    let Constructor = [].shift.call(arguments);
    o.__proto__ = Constructor.prototype;
    let res = Constructor.apply(o, arguments);
    return typeof res === 'object' ? res : o;
}