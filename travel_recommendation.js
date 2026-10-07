const searchInput = document.getElementById('search-input');
const searchOutput = document.getElementById('search-result');
const form = document.getElementById('search-form')
const apiURL = 'travel_recommendation_api.json';

async function getRecommendation(param) {
    try {
        const response = await fetch(apiURL)
        if(!response.ok) {
            throw new Error(`Response status: ${res.status}`)
        }
        
        const result = await response.json();
        console.log(result)
        searchOutput.innerHTML = `
            <div>
            <img src="tokyo.jpg" style="width:500px; height: 350px">
            </div>
            <div>
            <img src="kyoto.jpg" style="width:500px; height: 350px">
            </div>
            <div>
            <img src="bora.jpg" style="width:500px; height: 350px">
            </div>
            `
    } catch(err){
        console.error(err.message)
    }
}

getRecommendation()

function clearSearch() {
    // Clear search
}