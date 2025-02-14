async function fetdata(){
    let data= await fetch('http://localhost:3000/student')
    let fdata = await data.json()
    let tdata = fdata.map((e)=>`
    <tr>
        <td> ${e.id} </td> 
        <td> ${e.name} </td> 
        <td> ${e.age} </td> 
        <td> ${e.contact} </td> 
        <td> ${e.city} </td> 
        <td><button onclick="mydel('${e.id}','${e.name}')">   Delete  </button>   </td>
        </tr>
        `).join("")
        document.querySelector('#display').innerHTML= tdata

};
fetdata()


function mydel( id,name){
    fetch(`http://localhost:3000/student/${id}`,{
        method : 'DELETE'

    })
    .then(r=>alert(name+" "+"Ki Hogai Balle Balle"))
}
function insetdata(){
    let frdata={
        name:document.querySelector('#name').value,
        age:document.querySelector('#age').value,
        contact:document.querySelector('#contact').value,
        city:document.querySelector('#city').value
    }
    fetch('http://localhost:3000/student',{
        method : 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(frdata)

    })
    .then(r=>alert("Data Inserted Successfull...!!!"))
}
