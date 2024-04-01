const app=document.getElementById("app")
const nav=document.getElementById("navbar")
const arrows=document.getElementById("arrows")
const foodCon=document.getElementById("foodContainer")

let sandwichImg=document.createElement('img')
sandwichImg.setAttribute("src","sandwich.png")
sandwichImg.setAttribute("alt","Sandwich")
sandwichImg.setAttribute("class","characterSelect")
sandwichImg.setAttribute("id","sandwichImg")
sandwichImg.addEventListener("click",function(){foodScreen("sandwich",app)})
foodCon.appendChild(sandwichImg)

let dessertImg=document.createElement('img')
dessertImg.setAttribute("src","shortcake.png")
dessertImg.setAttribute("alt","Dessert")
dessertImg.setAttribute("class","characterSelect")
dessertImg.setAttribute("id","dessertImg")
dessertImg.addEventListener("click",function(){foodScreen("dessert",app)})
foodCon.appendChild(dessertImg)

const foodScreen=(food,parent)=>
{
    if(document.getElementById("columnContainer")!==null){document.getElementById("columnContainer").remove()}
    const docuFrag=document.createDocumentFragment()
    const columnContainer=document.createElement('div')
    columnContainer.id='columnContainer'
    columnContainer.style.width='100%'
    columnContainer.style.height='30%'
    columnContainer.style.display='flex'
    columnContainer.style.justifyContent='space-around'
    columnContainer.style.marginTop='30%'
    docuFrag.appendChild(columnContainer)
    for(let x=0;x<3;x++)
    {
        const column=document.createElement('div')
        column.style.height='100%'
        column.style.width='32%'
        column.style.display='block'
        column.style.border='solid white 1px'
        column.style.marginLeft='auto'
        column.style.marginRight='auto'
        column.innerHTML=`<img src=${food}/${x+1}.gif class="food" id="${food}${x+1}">`
        columnContainer.appendChild(column)
    }
    parent.appendChild(docuFrag)
}