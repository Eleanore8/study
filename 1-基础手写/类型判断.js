// 出现了非常多重复的数据类型判断逻辑
let isString = (obj) => {
    return Object.prototype.toString.call(obj) === '[object String]';
};
let isFunction = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Function]';
};
let isArray = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Array]';
};


/*
**  thunk函数：接收一定的参数，会生产出定制化的函数，最后使用定制化的函数去完成想要实现的功能。
*/
// 封装后
let isType = (type) => {
    return (obj) => {
        return Object.prototype.toString.call(obj) === `[object ${type}]`;
    }
}
// 使用
let isString = isType('String');

let isArray = isType('Array');

isString("123");    // true

isArray([1,2,3]);   // true
