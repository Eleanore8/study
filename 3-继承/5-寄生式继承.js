// 使用原型式继承可以获得一份目标对象的浅拷贝，
// 然后利用这个浅拷贝的能力再进行增强，添加一些方法，
function createObj (o) {
    var clone = Object.create(o);
    // 每次创建对象都会创建一遍方法。
    clone.getFriends = function () {
        return this.friends;
    }
    return clone;
}
//使用
let parent5 = {
    name: "parent5",
    friends: ["p1", "p2", "p3"],
    getName: function() {
      return this.name;
    }
  };
  let person5 = createObj(parent5);

  console.log(person5.getName());
  console.log(person5.getFriends());