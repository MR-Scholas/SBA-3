const app=document.getElementById("app")
const foodCon=document.getElementById("foodContainer")

const defAud=document.getElementById("DefaultAudio")
const sanAud=document.getElementById("SandwichAudio")
const desAud=document.getElementById("DessertAudio")

defAud.play()
sanAud.play()
desAud.play()
defAud.volume=0.5
sanAud.volume=0.0
desAud.volume=0.0

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

const userInput=document.createElement('form')
userInput.setAttribute("id","userInput")
app.appendChild(userInput)

const input=document.createElement('input')
input.setAttribute("type","text")
input.setAttribute("value","Sandwich or Dessert?")
input.required=true
input.addEventListener("input",function(){setTimeout(processInput(document.querySelector("input").value),500)})
document.getElementById("userInput").appendChild(input)

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

processInput=(value)=>
{
    if(value==="Sandwich")
    {
        document.querySelector(':root').style.setProperty('--lighter-rgb','200 100 100')
        document.querySelector(':root').style.setProperty('--darker-rgb','120 20 20')
    }
    if(value==="Dessert")
    {
        document.querySelector(':root').style.setProperty('--lighter-rgb','100 100 200')
        document.querySelector(':root').style.setProperty('--darker-rgb','20 20 120')
    }
    if(value==="Sandwich"||value==="Dessert")
    {
        document.querySelector(".background").style.backgroundImage=`url(background-${value}.png`
        alert(`You have joined the ${value} alliance.`)
        for(const audio of document.querySelectorAll('audio')) {audio.volume=0.0}
        document.getElementById(`${value}Audio`).volume=0.5
    }
    else
    {
        document.querySelector(".background").style.backgroundImage=`url(background.png`
        for(const audio of document.querySelectorAll('audio')) {audio.volume=0.0}
        document.getElementById(`DefaultAudio`).volume=0.5
        document.querySelector(':root').style.setProperty('--lighter-rgb','100 100 100')
        document.querySelector(':root').style.setProperty('--darker-rgb','20 20 20')
    }
}