const spinner=document.getElementById("loading-spinner");
const search=document.getElementById("search-btn");
const input=document.getElementById("country-input");
const test=document.getElementById("test")
async function searchCountry(countryName) {
    try {
        // Show loading spinner
        
        // Fetch country data
        const URL="https://restcountries.com/v3.1/name/"+input.value;
        const response= await fetch(URL);
        const data= response.json();
        test.textContent=data;
        // Update DOM
        document.getElementById('country-info').innerHTML = `
    <h2>${country.name.common}</h2>
    <p><strong>Capital:</strong> ${country.capital[0]}</p>
    <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    <p><strong>Region:</strong> ${country.region}</p>
    <img src="${country.flags.svg}" alt="${country.name.common} flag">
`;
        // Fetch bordering countries
        // Update bordering countries section
    } catch (error) {
        // Show error message
    } finally {
        // Hide loading spinner
    }}
    // Event listeners
document.getElementById('search-btn').addEventListener('click', () => {
    const country = document.getElementById('country-input').value;
    searchCountry(country);
});