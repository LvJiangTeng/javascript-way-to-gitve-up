// reduce array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// 执行累加
var arr = [1, 2, 3, 4]
var res = arr.reduce(function (a, b, c, d) {
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    return a + b
}, 2)
console.log(res)


var arr1 = [{ a: 1 }, { b: 2 }, { c: 3 }]
var res1 = arr1.reduce(function (a, b, c) {
    return {
        ...a,
        ...b
    }
}, {})
console.log(res1)
