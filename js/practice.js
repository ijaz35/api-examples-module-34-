const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
const displayCountry = countries => {
    const countriesContainer = document.getElementById('country-container');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country-style');
        div.innerHTML = `<h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountreyDetails('${country.name.common}')">Details</button>`;
        countriesContainer.appendChild(div);
    })
}
const loadCountreyDetails = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))

}
const displayCountryDetails = country => {
    const countryInfoContainer = document.getElementById('country-info');
    countryInfoContainer.innerHTML = `<h2>Country Details</h2>
    <h3>${country.name.common}</h3>
    <p>Population:  ${country.population}</p>
    <img src="${country.flags.png}">
    `;
}
loadCountries();