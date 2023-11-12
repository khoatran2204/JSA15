const SearchInput = document.getElementById("search-input")
const Name = document.querySelector(".name")
const Pokeimage = document.querySelector(".pokeimage")
const Type = document.querySelector(".type")
const Height = document.querySelector(".height")
const Weight = document.querySelector(".weight")
const Bio = document.querySelector(".bio")

SearchInput.addEventListener("change", (event)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            Name.innerHTML = data.species.name 
            Pokeimage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`
            Height.innerHTML = data.height/10 + "cm"
            Weight.innerHTML = data.weight + "lbs"
            Type.innerHTML = data.types[0].type.name
            fetch(data.abilities[0].ability.url)
                .then(response => response.json())
                .then((object) => {
                    Bio.innerHTML = object.effect_entries[1].short_effect
                })
        })
})