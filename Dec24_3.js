let x=parseInt(prompt("Enter  1st Number : "))

if(x%2==0){
    var i=1
    while(i<11){
        console.log(x*i)
        i++
    }
}
else{
    console.log(x*x*x)
}