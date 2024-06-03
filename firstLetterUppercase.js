let convert = ()=>{
    let str = document.getElementById('data1').value
    let s = str[0]

 //   let s = str.charat(0)
    let r = str.slice(1)
 
    document.getElementById('res1').innerText=`${s.toUpperCase()}${r}`

}