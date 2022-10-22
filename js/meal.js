document.getElementById('search-field')
    .addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            document.getElementById('button-search').click();
        }
    });
const searchMeal = async () => {
    const inputField = document.getElementById('search-field');
    const inputValue = inputField.value;
    const errorMsgContainer = document.getElementById('error-msg');

    if (inputValue == '' && errorMsgContainer.innerText == '') {
        const cardContainer = document.getElementById('card-container');
        const errorMsg = document.createElement('p');
        errorMsg.innerText = 'Please give anything which you want to search';
        errorMsg.style.textAlign = 'center';
        errorMsg.style.color = 'red';
        errorMsgContainer.appendChild(errorMsg);
        cardContainer.textContent = '';
    } else if (inputValue.length != 0) {
        errorMsgContainer.textContent = '';
        inputField.value = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
        // console.log(url);
        const res = await fetch(url);
        const data = await res.json();
        displayMeal(data.meals);
        /* fetch(url)
            .then(res => res.json())
            .then(data => displayMeal(data.meals)) */
    }

}
const displayMeal = meals => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
    const message = document.getElementById('meal-msg');
    if (meals == null) {
        const p = document.createElement('p');
        p.innerText = 'Sorry, your required meal is not found';
        p.style.textAlign = 'center';
        message.appendChild(p);
    } else {
        meals.forEach(meal => {
            // console.log(meal);
            message.textContent = '';
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div class="card" onclick="loadMeal(${meal.idMeal})">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    </div>
                </div>
            `;

            cardContainer.appendChild(div);

        })
    }


}
const loadMeal = async (meal) => {
    // console.log(meal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;
    const res = await fetch(url);
    const data = await res.json();
    displaySingleMeal(data.meals[0]);

    /*  fetch(url)
         .then(res => res.json())
         .then(data => displaySingleMeal(data.meals[0])) */
}
const displaySingleMeal = meal => {
    // console.log(meal);
    const singleMealContainer = document.getElementById('single-meal');
    singleMealContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card mx-auto my-3" style="width: 50%;">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                <a href="${meal.strYoutube
        }" target="_blank" class="btn btn-primary">Go somewhere</a>
            </div>

        </div>`;
    singleMealContainer.appendChild(div);
}