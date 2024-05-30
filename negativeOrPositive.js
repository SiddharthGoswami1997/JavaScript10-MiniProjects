let check =()=>{
    let x = document.getElementById('data').value

    
// ------------------mathmethod--------------------
let res = Math.sign(x)
    document.getElementById('res').innerText =res

//--------------------------if-else-------------
// if(x>0){
//     document.getElementById('res').innerText =`${x} is positive`
// }
// else if(x<0){
//     document.getElementById('res').innerText =`${x} is negative`
// }
// else if(x==0){
//     document.getElementById('res').innerText =`${x} is zero`
// }
// else {
//     document.getElementById('res').innerText =`enter a valid no.`
// }

}