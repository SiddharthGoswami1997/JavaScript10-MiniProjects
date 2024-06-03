let check = ()=> {
    let str = document.getElementById('data1').value
    let subStr = document.getElementById('data2').value
    let test1 = str.includes(subStr)
    let test2 = str.indexOf(subStr)
    document.getElementById('res1').innerText=`${test1}`
    document.getElementById('res2').innerText=`${test2}`

}