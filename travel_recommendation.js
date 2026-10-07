const searchInput = document.getElementById('search-input');
const searchOutput = document.getElementById('search-result');
const myForm = document.getElementById('search-form')
const apiURL = 'travel_recommendation_api.json';

async function getRecommendation() {
    try {
        const cleanInput = param.value.toLowerCase().trim();
        
        if (!cleanInput) {
            searchOutput.innerHTML = '';
            return;
        }
        
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`)
        }
        
        const data = await response.json();
        
        const countries = data.countries.filter(country => 
            country.name.toLowerCase().includes(cleanInput)
        )

        const cities = data.countries.flatMap(country => country.cities).filter(city => {
            city.name.toLowerCase().includes(cleanInput)
        })

        const temples = data.temples.filter(temple => {
            temple.name.toLowerCase().includes(cleanInput)
        })

        const beaches = data.beaches.filter(beach => {
            beach.name.toLowerCase().includes(cleanInput)
        })

        const results = [
            ...countries,
            ...cities,
            ...temples,
            ...beaches
        ]

        console.log(results)

        if(results.length === 0){
            searchOutput.innerHTML = `
                <p>No results found.</p>
            `;
            return
        }
        searchOutput.innerHTML = results.map(item => `
            <div class="recommendation">
                <h3>${item.name}</h3>
                <img src="${item.imageUrl}" alt="${item.name}">
                <p>${item.description}</p>
            </div>
        `).join('');
        
    } catch (error) {
        console.error(error.message)
    }
}

myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    getRecommendation();
    searchInput.value = "";
})

document.getElementById('clear-button').addEventListener('click', function () {
    searchInput.value = '';
    searchOutput.innerHTML = '';
});
