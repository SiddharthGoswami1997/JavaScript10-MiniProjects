let largest = ()=>{
    let x = document.getElementById('data1').value;
    let y = document.getElementById('data2').value;
    let z = document.getElementById('data3').value;

// -------------------or using math max method----------------------
let w = Math.max(x,y,z)
document.getElementById('res').innerText = `${w} is the greatest No.`

// ---------------------------------------------------------------

// ---------------------------using if-else------------------
// if (x>y && x>z){
//     document.getElementById('res').innerText = `${x} is the greatest No.`
// }
// else if (y>x && y>z){
//     document.getElementById('res').innerText = `${y} is the greatest No.`

// }
// else if (z>x && z>y){
//     document.getElementById('res').innerText = `${z} is the greatest No.`

// }
// else if (x==y && y==z){
//     document.getElementById('res').innerText = `all are equal`

// }
// else {
//     document.getElementById('res').innerText = `something is wrong`
  
// }

}

