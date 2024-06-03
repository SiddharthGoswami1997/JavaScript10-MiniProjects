let nn = parseInt(prompt('enter a positive integer'))
let fact = 0
function natuNum(x){
if (x>nn){
    return
}
else{
fact = fact + x 
x++
natuNum(x)

}

}
natuNum(1)
console.log(`${fact}`)

//------------------alternatemethod-----------------------

// function sum(num){
//     if(num>0){
//         return num + sum(num-1)
//     }
//     else{
//         return num
//     }
// }
// var res = sum(5);
// console.log(res)