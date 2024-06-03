
let num = parseInt(prompt("enter the range"))

for(let i=0; i<num;i++){
    let str = i.toString()

    let k = 0
    for(let j=0;j<str.length;j++)
        {
            k=k+str[j]**str.length
            

        }
        k == str ?console.log(`${str} is a armstrong number`): console.log('not a armstrong no.') 


}


