
    if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
const contriesContainser=document.querySelector('.countries-container')
fetch('https://restcountries.com/v3.1/independent?status=true')
.then((res)=>res.json())
.then((data)=>data.forEach(
    (country)=>{
        console.log(country.region)
const countryCard=document.createElement('a');
countryCard.classList.add('country-card')
countryCard.href= `/Countries_API_project/country.html?name=${country.name.common}`

const cardHTML= ` 
          <img src="${country.flags.svg}" alt="flag">
          <div class="card-text">
            <h3 class="card-title">${country.name.common}</h3>
          <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
          <p><b>Capital: </b>${country.capital?.[0]}</p>
          <p><b>Region: </b>${country.region}</p>
          </div>`

countryCard.innerHTML=cardHTML

contriesContainser.append(countryCard)
}
))

const darkModeToggle = document.querySelector('.dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
   document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});



