function lastDigit(){
let x = parseInt(document.getElementById('data1').value)
let y = parseInt(document.getElementById('data2').value)
let z = parseInt(document.getElementById('data3').value)
let w = x%10
let v = y%10
let u = z%10
let a = (w==v && v==u ? 'last digit are same':'not same')
document.getElementById('res').innerText=`${a}`

}