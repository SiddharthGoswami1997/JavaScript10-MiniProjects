// // // // //RECURSION

function factr(){



let number = parseInt(document.getElementById('data').value)
let fact = 1;
function factorial(x){
    if(x>number){
        return 
    }
    else{
        fact= fact*x;
        console.log(fact);
        x++;
        factorial(x);
}


}
factorial(1)
    document.getElementById('res').innerText = `${fact}`
}

// // // // // ----------------chat gpt------------------------
// // // // let n = document.getElementById('data').value
// // // // function factorial(n) {
// // // //     // Base case: if n is 0 or 1, return 1
// // // //     if (n === 0 || n === 1) {
// // // //       return 1;
// // // //     }
// // // //     // Recursive case: multiply n by the factorial of (n - 1)
// // // //     let x = n * factorial(n - 1)
// // // //     return x
// // // //   }

// // // //   document.getElementById('res').innerText = `${x}`
// ---------------------------------------n*n-1--------------------
// function factorial(n){
//     if(n==0)
//         return 1
//     else return n* factorial(n-1)
// }

// let number = parseInt(document.getElementById('data').value)
// let result = factorial(number)
// document.getElementById('res').innerText = `${result}`