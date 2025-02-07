


function forms(){
let namee=document.getElementById('name').values
let city=document.getElementById('city').values
let addr=document.getElementById('addess').values
let contactt=document.getElementById('mob').values


localStorage.setItem("Name",namee)
localStorage.setItem("Address",addr)
localStorage.setItem("Contact",contactt)
localStorage.setItem("Town",city)
return false
}