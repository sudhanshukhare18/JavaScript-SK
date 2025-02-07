


function forms(){
    let namee=document.getElementById('nameE').values
    let cityy=document.getElementById('city').values
    let addr=document.getElementById('addess').values
    let contactt=document.getElementById('mob').values
    
    
    localStorage.setItem("NameE",namee)
    localStorage.setItem("Address",addr)
    localStorage.setItem("Contact",contactt)
    localStorage.setItem("Town",cityy)
    return false
    }