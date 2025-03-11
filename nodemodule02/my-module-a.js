//การสร้าง moduleแบบ common js
const dataA = 'Hello...'

function sayHi(){
    console.log('Hi...')
}

const sawasdee =(yourname) => {
    console.log(`สวัสดี ${yourname}`)
}

module.exports = {
    dataA,
    sayHi,
    sawasdee
}

//หรือ
//module.exports.dataA = dataA
//module.exports.sayHi = sayHi
//module.exports.sawasdee = sawasdee