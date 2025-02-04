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
console.log(emp);
let newob=[
    {
        name:"Amit",
        age:48,
        contact:645,
        id:104
    }
]
emp.push(newob)

console.log(emp);

emp.splice(1,0,newob)
console.log(emp);
emp.pop()
console.log(emp);
emp.unshift()
console.log(emp);