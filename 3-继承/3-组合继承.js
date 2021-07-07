// Parent 执行了两次
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function () {
    console.log(this.name)
}
function Child (name, age) {
    // 第二次调用 Parent()
    Parent.call(this, name);
    this.age = age;
}
// 第一次调用 Parent()
Child.prototype = new Parent();
// 手动挂上构造器，指向自己的构造函数
Child.prototype.constructor = Child;

// 使用
var child1 = new Child('kevin', '18');
child1.colors.push('black');
console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child('daisy', '20');
console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]
