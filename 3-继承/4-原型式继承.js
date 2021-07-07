// Object.create 的模拟实现，将传入的对象作为创建的对象的原型。
function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F();
}

// 缺点：包含引用类型的属性值始终都会共享相应的值
var person = {
    name: 'kevin',
    friends: ['daisy', 'kelly']
}
var person1 = createObj(person);
var person2 = createObj(person);
person1.firends.push('taylor');
console.log(person2.friends); // ["daisy", "kelly", "taylor"]
