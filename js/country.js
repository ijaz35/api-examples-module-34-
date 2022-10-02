const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displatName(data))
}
loadCountries();
const displatName = (countries) => {
    // console.log(countries);
    const countryContainer = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country.name.common)
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `<h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="getDetails('${country.name.common}')">Details</button>`;
        countryContainer.appendChild(div);
    });
}

const getDetails = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data[0]))

}
const displayDetails = country => {
    const countryInfo = document.getElementById('country-info');
    countryInfo.innerHTML = `
    <h2>Country Details</h2>
    <h3>${country.name.common}</h3>
    <p>${country.population}</p>
    <img src="${country.flags.png}">
    `;
} 