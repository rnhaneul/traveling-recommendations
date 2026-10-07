const searchOutput = document.querySelector('.search-result');
const apiURL = 'travel_recommendation_api.json';

async function getRecommendation(param) {
    try {
        const response = await fetch(apiURL)
        if(!response.ok) {
            throw new Error(`Response status: ${res.status}`)
        }
        
        const result = await response.json();
        console.log(result)
    } catch(err){
        console.error(err.message)
    }
}

getRecommendation()