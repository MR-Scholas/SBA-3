const app=document.getElementById("app")
const nav=document.getElementById("navbar")
const arrows=document.getElementById("arrows")
const foodCon=document.getElementById("foodContainer")

const docuFrag=document.createDocumentFragment()





let sandwichImg=document.createElement('img')
sandwichImg.setAttribute("src","sandwich.png")
sandwichImg.setAttribute("alt","Sandwich")
sandwichImg.setAttribute("class","characterSelect")
foodCon.appendChild(sandwichImg)

let dessertImg=document.createElement('img')
dessertImg.setAttribute("src","shortcake.png")
dessertImg.setAttribute("alt","Dessert")
dessertImg.setAttribute("class","characterSelect")
foodCon.appendChild(dessertImg)

const foodScreen=(food)=>
{
    if(getElementById("columnContainer")!==undefined){getElementById("columnContainer").remove()}
    const columnContainer=document.createElement('div')
    columnContainer.id='columnContainer'
    columnContainer.style.width='100%'
    columnContainer.style.height='30%'
    columnContainer.style.display='flex'
    docuFrag.appendChild(columnContainer)
    const column=document.createElement('div')
    column.style.height='100%'
    column.style.width='32%'
    for(let x=0;x<3;x++)
    {
        column.innerHTML=food[x]
        docuFrag.columnContainer.appendChild(column)
    }
    app.appendChild(docuFrag)
}