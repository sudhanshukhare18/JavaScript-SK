//wap evenodd
let a=parseInt(prompt("Enter Age : "))
if(a>=18){
    let n=parseInt(prompt("Press 1 For INDIAN NATIONAL CONGRESS And 2 For NATIONAL DEMOCRATIC ALLIANCE "))
    if(n==1){
        alert("Congress Party Jindabad")
    }
    else if(n==2){
        alert("Ab Ki Baar Modi Sarkar")
    }
    else{
        alert("JAAKE JADU LAGAYE")
    }
}
else{
    alert("Not Eligible To Vote")
}