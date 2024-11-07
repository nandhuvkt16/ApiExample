function watercan()
{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("water is filled")
    },4000)
})
}


function roomcleaning()
{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const out =false
        if(out)
        {}
        resolve("water is filled")
    },4000)
})
}


watercan().then(value=>{console.log(value);return roomcleaning})
.then(value2=>{console.log(value2);return trash()})
.catch(error=>{console.log(error)})