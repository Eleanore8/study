// 递归实现
function flatten(arr) {
    let result = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
let arr = [1, [2, [3, 4, 5]]];
flatten(arr);

/*===================================================================================================================================== */

// reduce
function flatten(arr) {
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}
let arr = [1, [2, [3, 4, 5]]];
flatten(arr);

/*===================================================================================================================================== */

// 扩展运算符
function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
let arr = [1, [2, [3, 4, 5]]];
flatten(arr);

/*===================================================================================================================================== */

// split 和 toString 共同处理：
// toString 可以把数组直接转换成逗号分隔的字符串，然后再用 split 方法把字符串重新转换为数组
function flatten(arr) {
    return arr.toString().split(',');
}
let arr = [1, [2, [3, 4, 5]]];
flatten(arr);

/*===================================================================================================================================== */

// 正则和 JSON 方法共同处理
function flatten(arr) {
    let str = JSON.stringify(arr);
    str = str.replace(/(\[|\])/g, '');
    str = '[' + str + ']';
    return JSON.parse(str); 
}
let arr = [1, [2, [3, 4, 5]]];
flatten(arr);

/*===================================================================================================================================== */

// ES6 中的 flat
function flatten(arr) {
    return arr.flat(Infinity);
}
let arr = [1, [2, [3, 4, 5]]];
flatten(arr);
