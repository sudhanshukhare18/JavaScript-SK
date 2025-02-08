


function fun(){
    let namee=document.getElementById('nameE').value
    let cityy=document.getElementById('city').value
    let addr=document.getElementById('addess').value
    let contactt=document.getElementById('mob').value
    
    
    localStorage.setItem("Name",namee)
    localStorage.setItem("Address",addr)
    localStorage.setItem("Contact",contactt)
    localStorage.setItem("Town",cityy)
    return false
    }