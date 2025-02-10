const multi=()=>{
    let userdata={
     name:document.querySelector('#name').value,
     email:document.querySelector('#email').value,
     password:document.querySelector('#password').value
}
localStorage.setItem("userdata",JSON.stringify(userdata))
}
let data = JSON.parse(localStorage.getItem('userdata'))

console.log(data)


function log(){
    let logindata={
        logemail : document.querySelector('#logmail').value,
        logpass : document.querySelector('#logpass').value
    }
    if(data.email != logindata.logemail || data.password != logindata.logpass){
        alert("Apka Happy Birthday Hain! Congratulations ")
        document.getElementById('#logpass').focus
        return false
        
    }
}