let count = ()=>{
 let x = document.getElementById('data').value
 console.log(x)
 let i = 0
 for( i;i<x.length;i++){
   
     let r=0
for(let j=0;j<x.length;j++){
x[i] == x[j] ? r++ : r
}


if(r>1){
    console.log(`${x[i]} is repeated ${r} times`)
}
// else{
//     console.log(`${x[i]} is not repeated `)

// }

}
}