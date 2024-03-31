const app=document.getElementById("app")
const nav=document.getElementById("navbar")
const arrows=document.getElementById("arrows")


let sandwich=document.createElement('img')
sandwich.setAttribute("src","sandwich.png")
sandwich.setAttribute("alt","Sandwich")
sandwich.setAttribute("height","10%")
sandwich.setAttribute("class","characterSelect")
app.appendChild(sandwich)

let dessert=document.createElement('img')
dessert.setAttribute("src","shortcake.png")
dessert.setAttribute("alt","Dessert")
dessert.setAttribute("height","10%")
dessert.setAttribute("class","characterSelect")
app.appendChild(dessert)