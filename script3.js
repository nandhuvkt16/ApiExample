// settimeout

setTimeout(()=>
{
    console.log("hi im executed");
    
},3000);



//callback: pssing the function to the another functions argmts 


function name(x)
{
    console.log("name");
    x();
}

function greets()
{
    console.log("good morning");
    //x();
}
name(greets)


function task1(a)
{
    console.log("task1");
    a()
}
function task2(b)
{
    console.log("task2");
    b()
}
function task3(c)
{
    console.log("task3");
    c()
}
function task4()
{
    console.log("task4");
    
}
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4()
        })
    })
})

//asynchronoised

function task1(a)
{
    setTimeout(()=>
    {
        console.log("task1");
        a()
    
    },4000)
}
function task2(b)
{
    setTimeout(()=>
    {
        console.log("task2");
        b()
    
    },2000)
}
function task3(c)
{
    setTimeout(()=>
    {
        console.log("task3");
        c()
    
    },1000)
}
function task4()
{
    setTimeout(()=>
    {
        console.log("task4");

    
    },500)
}


//callback hell - synchronoised
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4()
        })
    })
})