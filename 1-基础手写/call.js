Function.prototype.mycall = function(ctx) {
    let context = ctx || window; // 不传参数默认指向window
    context.fn = this;
    let args = [...arguments].slice(1); // 截取foo的参数
    let res = context.fn(...args);
    delete context.fn;
    return res;
}

foo.mycall(obj, '名字', 18);