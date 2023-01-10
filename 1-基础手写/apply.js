Function.prototype.myApply = function(ctx) {
    let context = ctx || window;
    context.fn = this;
    let res;
    if (arguments[1]) {
        res = context.fn(...arguments[1]);
    } else {
        res = context.fn();
    }
    delete context.fn;
    return res;
}

foo.myApply(obj, ['名字', 18]);