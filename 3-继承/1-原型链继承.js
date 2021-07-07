// 实例使用的是同一个原型对象
function Parent() {
  this.name = 'parent';
  this.play = [1, 2, 3]
}
function Child() {
  this.type = 'child';
}
Child.prototype = new Parent();
// 问题：
// 1、引用类型的属性被所有实例共享，当改变时，其他的实例也会有影响
var s1 = new Child();
var s2 = new Child();
s1.play.push(4);
console.log(s1.play); // [1, 2, 3, 4]
console.log(s2.play); // [1, 2, 3, 4]
// 2、在创建 Child 的实例时，不能向Parent传参