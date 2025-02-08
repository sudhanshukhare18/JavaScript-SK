function fun(){
    let n=document.getElementById("name").value
    let r=document.getElementById("roll").value
    let a=document.getElementById("add").value
    let c=document.getElementById("contact").value

    localStorage.setItem("Name",n)
    localStorage.setItem("Rollno",r);
    localStorage.setItem("Address",a);
    localStorage.setItem("contactno",c);

}
function show(){
    
    let na =localStorage.getItem("Name")
    let ro=localStorage.getItem("Rollno")
    let ad=localStorage.getItem("Address")
    let co=localStorage.getItem("contactno")
    h1e.textcontent="Student Details"
    h1a.textcontent="Name"+na
    h1b.textcontent="Rollno"+ro
    h1c.textcontent="Address"+ad
    h1d.textcontent="contactno"+co


    

}
function data(){
    let na =localStorage.getItem("Name")
    let ro=localStorage.getItem("Rollno")
    let ad=localStorage.getItem("Address")
    let co=localStorage.getItem("contactno")
    h1e.textcontent="Student Details"
    h1a.textcontent="Name"+na
    h1b.textcontent="Rollno"+ro
    h1c.textcontent="Address"+ad
    h1d.textcontent="contactno"+co

}
function remove(){
    localStorage.clear();
}