// 1.避免了引用类型的属性被所有实例共享
function Parent () {
    this.names = ['kevin', 'daisy'];
}

function Child () {
    Parent.call(this);
}
var child1 = new Child();
child1.names.push('yayu');
console.log(child1.names); // ["kevin", "daisy", "yayu"]
var child2 = new Child();
console.log(child2.names); // ["kevin", "daisy"]

/*===================================================================================================================================== */

// 2.可以在 Child 中向 Parent 传参
function Parent (name) {
    this.name = name;
}
function Child (name) {
    Parent.call(this, name);
}
var child1 = new Child('kevin');
console.log(child1.name); // kevin
var child2 = new Child('daisy');
console.log(child2.name); // daisy

/*===================================================================================================================================== */

// 缺点：
// 1、方法都在构造函数中定义，每次创建实例都会创建一遍方法。
// 2、只能继承父类的实例属性和方法，不能继承原型属性或者方法。
function Parent1(){
    this.name = 'parent1';
}

Parent1.prototype.getName = function () {
    return this.name;
}

function Child1(){
    Parent1.call(this);
    this.type = 'child1'
}

let child = new Child1();
console.log(child);  // 没问题
console.log(child.getName());  // 会报错
