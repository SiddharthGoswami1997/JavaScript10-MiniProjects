let check =()=>{

    let x = document.getElementById ('data').value
    let r = 0
    for(let i=2;i<x;i++){
        x%i==0 ? r++: r
    }
    let res = r>0 ? "not a prime no.":"prime no."
    document.getElementById('res').innerText = `${res}`
}