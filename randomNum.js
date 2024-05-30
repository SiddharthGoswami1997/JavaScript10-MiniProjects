// ------------------otpgeneration-----------------

let Jackpot = ()=>{
    let x = Math.random()
    x=Math.floor(x*(10000-1))+1
    document.getElementById('data').innerText = `${x}`

}