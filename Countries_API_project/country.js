if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
const countryName=new URLSearchParams(location.search).get('name')

const backButton=document.querySelector('.back-btn')
backButton.addEventListener('click',(e)=>{
location.href = 'index.html';
})

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
.then((response)=>response.json())
.then((data)=> data.forEach(
    (country)=>
{
    console.log(country.name.common)
    const detailsContainer=document.querySelector('.details-container')
    const flagSection = document.createElement('div');
flagSection.className = 'flag-section';

const flagImg = document.createElement('img');
flagImg.src = `${country.flags.svg}`;
flagImg.alt = 'Belgium Flag';
flagImg.className = 'flag-img';

flagSection.appendChild(flagImg);
detailsContainer.appendChild(flagSection);
   
    const nativeName = country.name.nativeName
        ? Object.values(country.name.nativeName)[0].common
        : country.name.common;
    const countryDetailsHTML=`
    <div class="flag-section">
        <img src="${country.flags.svg}" alt="${country.name.common} Flag" class="flag-img">
      </div>
      <div class="info-section">
        <h2>${country.name.common}</h2>
        <div class="info-columns">
          <div class="info-col">
            <p><strong>Native Name:</strong> ${nativeName}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString('en-IN')}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Sub Region:</strong> ${country.subregion}</p>
            <p><strong>Capital:</strong> ${country.capital}</p>
          </div>
          <div class="info-col">
            <p><strong>Top Level Domain:</strong> .be</p>
            <p><strong>Currencies:</strong> ${
  country.currencies
    ? Object.values(country.currencies).map(c => c.name).join(', ')
    : ''
}</p>
            <p><strong>Languages:</strong> ${
  country.languages
    ? Object.values(country.languages).join(', ')
    : ''
}</p>
          </div>
        </div>
        <div class="border-countries">
          <strong>Border Countries:</strong>
          <span class="border-btn">${country.borders?.[0]}</span>
          <span class="border-btn">${country.borders?.[1]}</span>
          <span class="border-btn">${country.borders?.[2]}</span>
        </div>
      </div>
    </div>`

    detailsContainer.innerHTML=countryDetailsHTML
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




