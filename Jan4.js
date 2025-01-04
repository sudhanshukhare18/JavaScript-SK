let head =document.createElement('h1')
head.textContent="Hi we are Devlopers.....!!!!"
let bd = document.body
bd.append(head)
bd.setAttribute('bgcolor','skyblue')
head.setAttribute('align','center')
let a=document.getElementById('head2')
a.removeAttribute('align')
a.setAttribute('style',"background-color:black;color:white ; text-align:center")