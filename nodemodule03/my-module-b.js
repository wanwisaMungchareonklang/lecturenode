//การสร้าง moduleแบบ esmodule
const dataA = 'Hello...'
 
function sayHi(){
    console.log('Hi...')
}
 
const sawasdee =(yourname) => {
    console.log(`สวัสดี ${yourname}`)
}
 
export {dataA, sayHi, sawasdee}
