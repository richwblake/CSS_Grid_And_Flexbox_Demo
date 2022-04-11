const display = document.getElementById("display")
const interaction = document.getElementById("interaction")

const info = fetch("https://data.cityofnewyork.us/api/views/p94q-8hxh")

fetch("https://data.cityofnewyork.us/api/views/p94q-8hxh")
.then(r => r.json())
.then(console.log)

function getJSON(url){
    return fetch(url).then(r => r.json())
}

getJSON("https://data.cityofnewyork.us/api/views/p94q-8hxh").then(console.log)

fetch("https://adventure-time-api.herokuapp.com/api/v1/characters")
.then(r => r.json())
.then(data => {
    console.log(data)
    renderDisplayDiv(data[0])
    data.forEach(characterObject =>{
        renderInteractionDiv(characterObject)
    })
})

function renderDisplayDiv(character){
    display.removeChild(display.firstChild)

    const displayDiv = document.createElement("div")
    const characterImg = document.createElement("img")
    const infoDiv = document.createElement("div")
    const name = document.createElement("h1")
    const infoList = document.createElement("ul")
    const fullName = document.createElement("li")
    const species = document.createElement("li")
    const quotes = document.createElement("li")
    const quotesList = document.createElement("ul")

    character.quotes.forEach(quote =>{
        const newQuote = document.createElement("li")
        newQuote.textContent = quote
        quotesList.append(newQuote)
    })

    
    displayDiv.style.gridRow = "1 / span 1"
    displayDiv.style.height = "50vh"
    displayDiv.style.display = "grid";
    displayDiv.style.gridTemplateColumns = `17.7vh calc(100% - 17.7vh)`
    displayDiv.style.griedTemplateRows = "15vh 35vh"
    displayDiv.style.backgroundColor = "white";
    
    
    characterImg.src = character.sprite
    characterImg.style.gridColumn = "1 / span 1"
    characterImg.style.gridRow = '1 / span 1'
    characterImg.style.height= "15vh"
    characterImg.style.backgroundColor = "hsl(200, 100%, 70%)"

    name.textContent = character.displayName
    name.style.gridRow = "1 / span 1"
    name.style.gridColumn = "2 / span 1"
    name.style.margin = "0px"
    name.style.padding = "5vh 0px 0px 0px"
    name.style.textAlign = "center"
    name.style.fontSize = "6vh"
    name.style.backgroundColor = "hsl(200, 100%, 80%)"

    infoDiv.style.gridColumn = "1 / span 2"
    infoDiv.style.gridRow = "2 / span 1"
    infoDiv.style.width = "100%"
    infoDiv.style.height = "35vh"
    infoDiv.style.overflow = "auto"
    infoDiv.style.backgroundColor= "hsl(200, 100%, 90%)"

    infoList.style.fontSize = "3vh"

    fullName.textContent = `Full Name: ${character.fullName}`

    species.textContent = `Species: ${character.species}`

    quotes.textContent ="Quotes:"
    
    quotesList.style.maxWidth = "100%"
   
    infoList.append(fullName, species, quotes, quotesList)
    infoDiv.append(infoList)
    displayDiv.append(characterImg, name, infoDiv)
    display.append(displayDiv)
}

function renderInteractionDiv(character){
    const characterOption = document.createElement("div")
    const thumbnail = document.createElement("img")

    thumbnail.src = character.sprite
    thumbnail.style.maxHeight = "18vh"

    characterOption.style.gridRow = "1 / span 1"

    characterOption.addEventListener("click", ()=>{
        renderDisplayDiv(character)
    })

    characterOption.append(thumbnail)
    interaction.append(characterOption)
}

