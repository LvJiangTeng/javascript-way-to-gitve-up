var fn = function (res) {
    return res
}
Promise.resolve(2).then(fn()).then(result => {
    console.log(result)
})

var func = new Promise(function (resolve, reject) {
    if (true) {
        resolve()
    } else {
        reject()
    }
}
)
func.then(function () {
    console.log('true')
}).catch(function () {
    console.log('false')
})

var fun = function () {
    return new Promise(function (resolve, reject) {
        if (false) {
            resolve('true')
        } else {
            reject('false')
        }
    }
    )
}
fun().then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
})