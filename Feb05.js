let emp=[
    {
        name:"Mohit",
        age:78,
        contact:8764,
        id:101
    },
    {
        name:"Atul",
        age:45,
        contact:5554,
        id:102
    },
    {
        name:"Manish",
        age:24,
        contact:46468,
        id:103
    }
]

let data=emp.map((e)=>{return e})
console.log(data)
let fdata=emp.filter((e)=>{return e.name=="Atul"})
console.log(fdata)