// let x = prompt("enter a two digit no. to be swaped ","")
// let z = parseInt(x)
// let q = z/10
// let nq = parseInt(q)
// let r = z-(10*nq)
// let n = (r*10)+nq
// console.log(n)

// ----------------- using variable-------------------

// let x = prompt("enter a no. to be swaped x ","")
// let y = prompt("enter a no. to be swaped  y ","")
// let temp
// temp = x
// x=y
// y=temp
// console.log("x: "+ x +" y: "+ y)

//------------using without 3rdvariable-----------
let x = prompt("enter a no. to be swaped x ","")
let y = prompt("enter a no. to be swaped  y ","")
z=parseInt(x) 
w=parseInt(y) 
z= z + w 
w = z - w
z = z- w
console.log(z+" x and y "+w)