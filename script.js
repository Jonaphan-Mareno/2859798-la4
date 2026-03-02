const spinner=document.getElementById("loading-spinner");
const test=document.getElementById("test")
const error=document.getElementById("error-message")
spinner.classList.add("hidden");
let data;
async function searchCountry(countryName) {
    try {
        // Show loading spinner
        spinner.classList.remove("hidden");
        // Fetch country data
        const URL="https://restcountries.com/v3.1/name/"+countryName;
        const response= await fetch(URL);
        data=await response.json();
      
        // Update DOM
        document.getElementById('country-info').innerHTML = `
    <h2>${data[0].name.common}</h2>
    <p><strong>Capital:</strong> ${data[0].capital[0]}</p>
    <p><strong>Population:</strong> ${data[0].population.toLocaleString()}</p>
    <p><strong>Region:</strong> ${data[0].region}</p>
    <img src="${data[0].flags.svg}" alt="${data[0].name.common} flag">
`;test.textContent=data[0].borders;
        // Fetch bordering countries
        for(let i=0;i<data[0].borders.length();i++){       
        const URL2= "https://restcountries.com/v3.1/alpha/"+data[0].borders[i];
        const response2=await fetch(URL2);
        const data2=await response2.json();
        
    
    }
        // Update bordering countries section
    } catch (error) {
        
    } finally {
        // Hide loading spinner
        spinner.classList.add("hidden");
    }}
    // Event listeners
document.getElementById('search-btn').addEventListener('click', () => {
    const country = document.getElementById('country-input').value;
    searchCountry(country);
});
