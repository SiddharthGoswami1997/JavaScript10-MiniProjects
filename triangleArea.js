// -------rightangled triangle-------
// let h = prompt('enter the height of triangle',"")
// let b = prompt("enter the base of triangle","")
// let a = (1/2)*Number(h)*Number(b)
// console.log(a)
// ---------using heron's formula----------
let h = prompt('enter the sideA of triangle',"")
let b = prompt("enter the sideB of triangle","")
let l = prompt("enter the sideC of triangle","")
let s = (Number(h)+Number(b)+Number(l))/2
// ---------------------------------------
// let area = (s*(s-Number(h))*(s-Number(b))*(s-Number(l)))**(1/2)
// -----------or----------
let temp =(s*(s-Number(h))*(s-Number(b))*(s-Number(l)))
let area = Math.sqrt(temp)
console.log(area)