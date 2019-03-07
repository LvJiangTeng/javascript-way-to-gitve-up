// var fn = function (res) {
//     return res
// }
// Promise.resolve(2).then(fn()).then(result => {
//     console.log(result)
// })

// var func = new Promise(function (resolve, reject) {
//     if (true) {
//         resolve()
//     } else {
//         reject()
//     }
// }
// )
// func.then(function () {
//     console.log('true')
// }).catch(function () {
//     console.log('false')
// })

// var fun = function () {
//     return new Promise(function (resolve, reject) {
//         if (false) {
//             resolve('true')
//         } else {
//             reject('false')
//         }
//     }
//     )
// }
// fun().then(res => {
//     console.log(res)
// }).catch(e => {
//     console.log(e)
// })

// var p1 = Promise.resolve({
//     then: function (onFulfill, onReject) {
//         onFulfill('success')
//     }
// })

// console.log(p1 instanceof Promise)
// p1.then(function (v) {
//     console.log(v)
// })

// var thenable = {
//     then: function (resolve) {
//         throw new TypeError("Throwing");
//         resolve("Resolving");
//     }
// };

// var p2 = Promise.resolve(thenable)
// p2.then(function (v) {
//     console.log(v)
// }).catch(function (e) {
//     console.log(e + 1)

// })

var thenable = {
    then: function (resolve) {
        resolve('resolving')
        throw new TypeError('error')
    }
}

var p3 = Promise.resolve(thenable)
p3.then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
})