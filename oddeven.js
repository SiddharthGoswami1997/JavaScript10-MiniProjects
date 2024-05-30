let check =()=>{
    let x = document.getElementById('data').value
// -----------teranary operator--------------
let res = x%2==0 ? "even" : "odd"
document.getElementById('res').innerText= `${res}` 
// -----------------or-ifelse-------------
    //    if(x%2==0){
//             document.getElementById('res').innerText =`${x} is even`
//         }
//         else if(x%2!=0){
//             document.getElementById('res').innerText =`${x} is odd`
//         }
//         else {
//             document.getElementById('res').innerText =`enter a valid no.`
//         }
}