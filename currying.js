
function sum(a, b, c) {
    return a + b + c;
}

console.log('simple sum', sum(2, 5, 3));

//sum(a, b, c, ) => sum(a)(b)(c)

function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c);
            };
        };
    };
}
const curriedSum = curry(sum);
console.log('curried sum', curriedSum(2)(3)(5));

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);

console.log(add5);