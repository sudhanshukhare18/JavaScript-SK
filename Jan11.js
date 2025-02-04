function colorrr(){
    let cont=document.getElementsByClassName('container')
    console.log(cont);
    cont[0].classList.toggle('colorr')
}
let c=document.querySelectorAll('.container1')
c[0].style.color='red'
let btn=document.querySelector('#btn')
btn.addEventListener('click',function(){
    alert("add event fire")
})