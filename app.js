const app=document.getElementById("app")
const nav=document.getElementById("navbar")
const arrows=document.getElementById("arrows")
const food=document.getElementById("foodContainer")


let sandwich=document.createElement('img')
sandwich.setAttribute("src","sandwich.png")
sandwich.setAttribute("alt","Sandwich")
sandwich.setAttribute("class","characterSelect")
food.appendChild(sandwich)

let dessert=document.createElement('img')
dessert.setAttribute("src","shortcake.png")
dessert.setAttribute("alt","Dessert")
dessert.setAttribute("class","characterSelect")
food.appendChild(dessert)

const sandwichMenu=(food)=>
{
    let item=document.createElement('div')
    item.className="menu 1"
}