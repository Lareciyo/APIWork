document.querySelector('button').addEventListener('click', ()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((grindHouse) =>{
        return grindHouse.json();
    })
    .then((data) =>{
        document.querySelector('img').src = data.message;
    })
});

document.querySelector('#checkWeather').addEventListener('click', () => {
    const city =document.querySelector('#cityAreas').value.trim();
    if(city === ''){
        alert("Please enter a city name.");
        return;
    }
    fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('#temperature').textContent = data.temperature  || "N/A";
        document.querySelector('#wind').textContent = data.wind  || "N/A";
        document.querySelector('#description').textContent = data.description  || "N/A";
    })
    .catch(error => {
        console.error("Error fetching weather:", error);
        alert("Unable to fetch Weather. Please try again later.")
    })
})