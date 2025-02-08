

function fun(){
let n = document.getElementById('name').value
let a = document.getElementById('age').value
let c = document.getElementById('contact').value
let m = document.getElementById('mob').value

    localStorage.setItem("Name",n)
    localStorage.setItem("age",a)
    localStorage.setItem("contact",c)
    localStorage.setItem("ID",m)
    
    localStorage.getItem(n)
}
function show(){
    let pq=localStorage.getItem("Name")
    let ag=localStorage.getItem("age")
    let co=localStorage.getItem("contact")
    let mo=localStorage.getItem("ID")
    h1e.textContent="Student Data"
    
    h1a.textContent="Name is : "+pq
    h1b.textContent="Age is : "+ag
    h1c.textContent="Contact No is : "+co
    h1d.textContent="ID is : "+mo
    return false
}

function cleardata(){
    localStorage.clear()
}