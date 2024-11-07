let str = "javascript"
for(let i=0;i<str.length;i++)
{
    //console.log(str[i]);
    
}
let newString=" "
for(let i=str.length-1;i>=0;i--)
    {
          newString +=str[i];
        
    }
    console.log(newString);


    let fruits =["apple","orange","guave"]

    let veg =["carrot","beans","chilles"]
    
    let cosm =["powder","scent"]

    let cover =fruits.concat(veg,cosm)

    console.log(cover)

    console.log(cover[2])



    let arrObj={ name :"manu",
                  country:"india"
    }

    for(var x in arrObj)
    {
        console.log(x+" <=> "+arrObj[x]);
        
    }

    let nestObj =[

             {StudentName:"Anu",
                age:12,
                std:"7th grade",
                address: "chennai"

               },
               {StudentName:"ajay",
                age:14,
                std:"9th grade",
                address: "bangalore"

               },
               {StudentName:"manu",
                age:13,
                std:"8th grade",
                address: "hyd"

               },
               {StudentName:"raj",
                age:11,
                std:"6th grade",
                address: "chennai"

               },
               {StudentName:"jeni",
                age:14,
                std:"9th grade",
                address: "bangalore"

               }

    ]

    console.log(nestObj);
    
    console.log("1. "+Object.values(nestObj[0])+"  3. "+Object.values(nestObj[2]));
    nestObj[1].StudentName="sanju"
    nestObj[1].std="8th grade"
    console.log(nestObj[2]);

    console.log(nestObj[4]);
    

    function std(name,age,bgrp){
        this.StudentName=name
        this.age=age
        this.bgrp=bgrp
    }
    
    
    const details=new std("jai",12,"b+") 
    console.log(details);
    