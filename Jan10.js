function validate(){
    let name = document.getElementById( 'name' ).value 
    let age = document.getElementById( 'age' ).value 
    let contact = document.getElementById( 'contact' ).value 
    let email = document.getElementById( 'email' ).value 
    let pass = document.getElementById( 'password').value 
    let cpass = document.getElementById( 'cpassword').value 
    
    if(name==""){
        alert("P1ease fill your name") 
        document. getElementById('name').focus( ) 
        return false
    }
    else if(age==""){ 
        let erage = document.getElementById( 'errorage')
        erage.innerHTML = "Please fill this filed" 
        document. getElementById( 'age') .focus( ) 
        return false
    }
    else if(contact==""){
        alert("Please eneter number")
        document. getElementById( 'contact') .focus( ) 
        document.getElementById('contact')

        return false
    }
    else if( isNaN(contact) ){
        alert("number should be in digit")
        document. getElementById('contact').focus( )
        let c = document.getElementById( 'contact' )
        c.style.boxShadow="1px 1px 30px 1px red"
        c.style.border="1px red"
        return false 
    }
    else if(contact.length>9||contact.lenght<10){
        alert("10 digit number")
        document. getElementById('contact').focus( ) 
        return false
    }
    else if(email==""){
         alert("please enter email ")
         document.getElementById('email').focus()
         return false
    }
    
    else if(!(email.includes('@'))){
        alert("invalid mail")
        document.getElementById('email').focus()
         return false
    }

    else if(pass==""){
        alert("please enter password")
        document.getElementById('password').focus()
        return false
    }
    
    else if(!(pass.match(/[~!@#$%^&*]/))){
        alert("please include special character")
        document.getElementById('password').focus()
        return false
    }
    else if(cpass==""){
        alert("please enter confirm password")
        document.getElementById('cpassword').focus()
        return false
    }
    else if(cpass!=pass){
        alert("Password Mismatch")
        document.getElementById('cpassword').focus()
        return false
    }
}